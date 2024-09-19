import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ConfirmationModalComponent} from "../../../../shared/components/confirmation-modal/confirmation-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";


interface TreeNode {
  id: number;
  name: string;
  children?: TreeNode[];
  isExpanded?: boolean;
}

@Component({
  selector: 'app-nouveau-role',
  templateUrl: './nouveau-role.component.html',
  styleUrls: ['./nouveau-role.component.scss']
})
export class NouveauRoleComponent implements OnInit {
  generalInfoForm: FormGroup;
  treeData: TreeNode[] | undefined;

  data = [
    { id: 1, name: "Informations du déposant_Dossiers déposants" },
    { id: 1, name: "Informations du déposant_Consulter les informations du déposant_Dossiers déposants" },
    { id: 1, name: "Informations du déposant_Mettre à jour les informations générales du déposant_Dossiers déposants" },
    { id: 1, name: "Détails de l'indemnisation_Consulter les détails de l'indemnisation du déposant_Dossiers déposants" },
    { id: 1, name: "Détails de l'indemnisation_Consulter les informations générales du dossier d'indemnisation_Dossiers déposants" },
    { id: 1, name: "Détails de l'indemnisation_Consulter le mode de règlement_Dossiers déposants" },
    { id: 1, name: "Réclamations_Consulter les réclamations du déposant_Dossiers déposants" },
    { id: 1, name: "Réclamations_Rédiger une réclamation pour un déposant_Dossiers déposants" },
    { id: 1, name: "Réclamations_Répondre à une réponse reçue_Dossiers déposants" },

    { id: 3, name: "Réclamation_Consulter la réclamation_Réclamations du déposant concernant le centre d'appel" },
    { id: 3, name: "Réclamation_Répondre à une réclamation_Réclamations du déposant concernant le centre d'appel" },
    { id: 3, name: "Informations du déposant_Consulter les informations du déposant_Réclamations du déposant concernant le centre d'appel" },
    { id: 3, name: "Détails de l'indemnisation_Consulter les détails de l'indemnisation du déposant_Réclamations du déposant concernant le centre d'appel" },


  ];

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private router: Router,
  ) {
    this.generalInfoForm = this.fb.group({
      roleCode: [{ value: "R010", disabled: true }, Validators.required],
      roleTitle: [null, Validators.required]
    });
  }
  getLastSegmentBeforeUnderscore(nodes: Array<{ id: number; name: string }>): string {
    if (nodes.length === 0) {
      return "DefaultRoot";
    }

    const lastNodeName = nodes[nodes.length - 1].name;
    const segments = lastNodeName.split("_");
    const lastSegmentIndex = segments.length - 1; // Index of the last segment
    return segments[lastSegmentIndex];
  }
  uniqueRootCategories(nodes: Array<{ id: number; name: string }>): string[] {
    const categorySet = new Set<string>();
    nodes.forEach(node => {
      const segments = node.name.split("_");
      const lastSegment = segments[segments.length - 1];
      categorySet.add(lastSegment);
    });
    return Array.from(categorySet);
  }

  buildTree(nodes: Array<{ id: number; name: string }>): TreeNode[] {
    const categories = this.uniqueRootCategories(nodes);
    const tree: TreeNode[] = categories.map(category => ({
      id: Math.random(),
      name: category,
      children: []
    }));

    nodes.forEach(node => {
      const segments = node.name.split("_");
      const categorySegment = segments[segments.length - 1];
      const mainCategoryName = segments[0];

      const rootNode = tree.find(root => root.name === categorySegment);
      if (rootNode) {
        let mainCategory = rootNode.children!.find(c => c.name === mainCategoryName);
        if (!mainCategory) {
          mainCategory = { id: Math.random(), name: mainCategoryName, children: [] };
          rootNode.children!.push(mainCategory);
        }
        mainCategory.children!.push({
          id: node.id,
          name: node.name,
          children: []
        });
      }
    });

    return tree;
  }

  ngOnInit(): void {
    this.treeData = this.buildTree(this.data);
  }

  toggleAllChildren(node: any, isActive: boolean): void {
    node.isActive = isActive;
    if (node.children) {
      node.children.forEach((child: any) => {
        child.isActive = isActive;
        this.toggleAllChildren(child, isActive);
      });
    }
  }
  confirmAjoutRole() {
    const modalRef = this.modalService.open(ConfirmationModalComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.title = 'deposant.gestionRoles.confirmeAjouterRole';
    modalRef.componentInstance.confirmDelete.subscribe(() => {
      this.router.navigate(['/gestion-roles/role']);
    });
  }


  goBack() {
    window.history.back();
  }
}
