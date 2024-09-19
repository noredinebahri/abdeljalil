import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {ToastService} from "../../../../shared/components/toast/toast.service";
import {StatusDossier} from "../../../../enums/status-dossier";
import {IReclamation} from "../../../../models/reclamation";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CriticiteDossier} from "../../../../enums/criticite-dossier";
import {StatusReclamation} from "../../../../enums/status-reclamation";
import {filter} from "rxjs";

@Component({
  selector: 'app-detail-reclamation',
  templateUrl: './detail-reclamation-agent-payeur.component.html',
  styleUrl: './detail-reclamation-agent-payeur.component.scss'
})
export class DetailReclamationAgentPayeurComponent implements OnInit {
  reclamationData?: IReclamation;
  status: string | null = null;
  showTab: string  = 'reclamation';
  isCanShowTabs: boolean = false;
  private allowedRouterForTabs = ['/adherent'];
  constructor(private modalService: NgbModal,private router: Router, private route: ActivatedRoute, private toastService : ToastService) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
      this.isCanShowTabs = this.allowedRouterForTabs.some(route => event.urlAfterRedirects.includes(route));
    });
  }

  ngOnInit(): void {
    this.reclamationData = JSON.parse(localStorage.getItem('reclamationData')!);
    this.status = this.route.snapshot.queryParamMap.get('status');
    if (this.status) {
      this.showToast(this.status);
    }
  }

  showToast(status: string) {
    const toastMessage = status === StatusDossier.BROUILLON ?
      this.toastService.showSuccess('Votre réclamation a bien été enregistré comme brouillon.') :
      this.toastService.showSuccess('Votre réclamation a été envoyé avec succès.');
  }

  previousState(): void {
    this.router.navigateByUrl('/agent-payeur');
  }

  getBadgeClass(status: string | undefined): string {
    switch (status) {

      case StatusDossier.EN_COURS:
        return 'badge En-cours';

      case StatusReclamation.OUVERTE:
        return 'badge Traitée';

      case StatusDossier.CLOTUREE:
        return 'badge Clôturée';

      case StatusDossier.BROUILLON:
        return 'badge Brouillon';

      default:
        return 'badge';
    }

  }

  getTranslationKey(field: string | undefined): string {
    let category = '';
    if (field === CriticiteDossier.FAIBLE || field === CriticiteDossier.ELEVEE || field === CriticiteDossier.CRITIQUE) {
      category = 'enum.criticite.';
    }
    else if (field === StatusReclamation.OUVERTE)
    {
      category = 'enum.statutReclamation.';
    }
    else  {
      category = 'enum.statutDossier.';
    }
    return category;
  }


  statusArray = [
    { date: "", text: 'deposant.reclamation.detail.etatExecptionnel.dossierCree'},
    { date: '18/10/2023 18:00', text: 'deposant.reclamation.detail.etatExecptionnel.enAttenteInfo',active: true},
    { date: '18/10/2023 18:00', text: 'deposant.reclamation.detail.etatExecptionnel.indemnisationCalculee'   },
    { date: '18/10/2023 18:00', text: 'deposant.reclamation.detail.etatExecptionnel.reglementEncours' }
  ];
  protected readonly StatusDossier = StatusDossier;

  openCloturerModal(){

  }

  protected readonly StatusReclamation = StatusReclamation;
}
