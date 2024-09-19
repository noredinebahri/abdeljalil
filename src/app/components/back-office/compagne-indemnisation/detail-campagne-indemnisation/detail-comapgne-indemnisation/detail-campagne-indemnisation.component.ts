import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormItem } from 'src/app/shared/components/form/form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';
import { CampagneIndemnisation } from 'src/app/models/campagneIndemnisation';
import { CampagneIndemnisationService } from 'src/app/services/compagne-indemnisation/campagne-indemnisation.service';

@Component({
  selector: 'app-detail-campagne-indemnisation',
  templateUrl: './detail-campagne-indemnisation.component.html',
  styleUrls: ['./detail-campagne-indemnisation.component.scss']
})
export class DetailCampagneIndemnisationComponent {
  id: number | undefined;
  campagneIndemnisation: CampagneIndemnisation | undefined = undefined;
  formItems3: FormItem[] = []; 

  constructor(
    private route: ActivatedRoute,
    private campagneIndemnisationService: CampagneIndemnisationService,
    private router: Router,
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');

      if (idParam) {
        this.id = +idParam;
        this.loadData();
      } else {
        console.error('ID parameter is missing or invalid');
      }
    });
  }
  handleFormData(event: any): void {

    console.log("Event object as JSON:", JSON.stringify(event, null, 2));

  }

  loadData(): void {
    if (this.id) {
      this.campagneIndemnisationService.find(this.id).subscribe(
        data => {
          this.campagneIndemnisation = data;
  
          this.initializeFormItems(); 
        },
        error => {
          console.error('Error loading data:', error);
        }
      );
    }
  }

  redirectToUpdateCompagne(id:any): void {

    this.router.navigateByUrl(`/update-campagne-indemnisation/${id}`);

  }

  deleteCompagne(id: number): void {
    const modalRef = this.modalService.open(ConfirmationModalComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.itemId = id;
    modalRef.componentInstance.title =  'indemnisation.supressionTitle' ;
    modalRef.componentInstance.value = id;

    modalRef.componentInstance.confirmDelete.subscribe(() => {
      if (id) {
        this.campagneIndemnisationService.delete(id).subscribe(
          () => {
            this.router.navigate(['/compagne-indemnisation']); 
          },
          error => {
            console.error('Error deleting compagne:', error);
          }
        );
      }
    });
  
    modalRef.componentInstance.cancelDelete.subscribe(() => {
      // Handle cancel action if needed
      modalRef.close(); // Close the dialog
    });
  }
  goBack() {
    this.router.navigateByUrl(`/back-office/indemnisation`);
  }

  initializeFormItems(): void {
    this.formItems3 = [
      {
        itemType: 'title',
        title: 'N° Compagne '+this.campagneIndemnisation?.numCampagne
      },
      {
        itemType: 'field',
        placeholder: 'N° campagne',
        type: 'text',
        value: this.campagneIndemnisation?.numCampagne || '',       
        disabled: true,
      },
      {
        itemType: 'field',
        placeholder: 'Nom adhèrent',
        type: 'text',
        value: this.campagneIndemnisation?.nomAdherent || '',
        disabled: true,
      },
      {
        itemType: 'field',
        placeholder: 'Date debut',
        type: 'text',
        value: this.campagneIndemnisation?.dateDebut,
        disabled: true,
      },
      {
        itemType: 'field',
        placeholder: 'Date fin',
        type: 'text',
        value: this.campagneIndemnisation?.dateFin,
        disabled: true,
      },
      {
        itemType: 'field',
        placeholder: 'Nature campagne',
        type: 'text',
        value: this.campagneIndemnisation?.natureCampagne,
        disabled: true,
      },
      {
        itemType: 'button',
        alignment: 'right',
        text: 'Modifier',
        disabled: false,
        action: () => { this.redirectToUpdateCompagne(this.id?? 0) },
      },
      {
        itemType: 'button',
        alignment:'left',
        text: 'Suprimer',
        type: 'submit',
        outlined:true,

        disabled: false,
        action: () => { this.deleteCompagne(this.id?? 0) },

      },
    ];

  }
}
