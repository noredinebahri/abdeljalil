import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { FormItem } from 'src/app/shared/components/form/form.component';
import { ActionClickEvent } from 'src/app/shared/components/table/table.config';
import { ToastService } from 'src/app/shared/components/toast/toast.service';
import { UpdateModalComponent } from '../../referentiels/update-modal/update-modal.component';
import { CampagneIndemnisation } from 'src/app/models/campagneIndemnisation';
import { CampagneIndemnisationService } from 'src/app/services/compagne-indemnisation/campagne-indemnisation.service';

@Component({
  selector: 'app-update-campagne-indemnisation',
  templateUrl: './update-campagne-indemnisation.component.html',
  styleUrls: ['./update-campagne-indemnisation.component.scss']
})
export class UpdateCampagneIndemnisationComponent {
  id: number | undefined;
  campagneIndemnisation: CampagneIndemnisation | undefined = undefined;
  formItems3: FormItem[] = [];
  @Input() action: string | undefined;  

  @Input() formItems: FormItem[] = [];

  @Output() actionClick = new EventEmitter<string>();  
  @Output() fileSelected: EventEmitter<File | null> = new EventEmitter<File | null>();
  receivedFile: File | null = null;


  

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private campagneIndemnisationService: CampagneIndemnisationService,
    private toastService: ToastService,
    private modalService: NgbModal,
    private translateService: TranslateService
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

  onActionClick(event: ActionClickEvent<any>): void {
    
  }

  redirectToConsultCompagne(id:any): void {

    this.router.navigateByUrl(`/detail-campagne-indemnisation/${id}`);

  }

  onFileChange(event: any) {
    const file = event.target.files[0] || null;
    this.fileSelected.emit(file);
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



  onFileReceived(file: File | null) {
    this.receivedFile = file;
  }
handleFormData(formValue: any) {

  const dateFinValue = formValue['Date fin'];
  if (dateFinValue) {
    let formattedDate: string;
    
    if (dateFinValue instanceof Date) {
      formattedDate = dateFinValue.toISOString().split('T')[0]; 
    } else if (typeof dateFinValue === 'string') {
      formattedDate = dateFinValue;
    } else {
      return; 
    }
    
    if (this.campagneIndemnisation) {
      this.campagneIndemnisation.dateFin = formattedDate;
    }
  }

  const commentaireValue = formValue['commentaires'];
  if (commentaireValue && this.campagneIndemnisation) {
    this.campagneIndemnisation.Commentaires = commentaireValue;
  }



  // Save the data
  if (this.campagneIndemnisation) {
    this.initializeFormItems()
    const modalRef = this.modalService.open(UpdateModalComponent  , { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.formItems = this.formItems3;
    modalRef.componentInstance.isSubmitted = true;
    modalRef.componentInstance.title = 'indemnisation.updateTitle';
    modalRef.componentInstance.action = 'update';

    modalRef.componentInstance.confirmUpdate.subscribe(() => {
      if (this.campagneIndemnisation) {
        this.campagneIndemnisationService.create(this.campagneIndemnisation).subscribe({
          next: () => {
            this.toastService.showSuccess(this.translateService.instant('global.messages.addSuccess'));
            this.loadData();
          },
          error: (error) => {
          }
        });
      }
    });

   
  }
}
  
goBack() {
  window.history.back();
}

  

initializeFormItems(): void {
  this.formItems3 = [
    {
      itemType: 'title',
      title: 'N° Campagne ' + this.campagneIndemnisation?.numCampagne
    },
    {
      itemType: 'field',
      placeholder: 'nCampagne',
      type: 'text',
      value: this.campagneIndemnisation?.numCampagne || '',
      disabled: true,
    },
    {
      itemType: 'field',
      placeholder: 'nomAdherent',
      type: 'text',
      value: this.campagneIndemnisation?.nomAdherent || '',
      disabled: true,
    },
    {
      itemType: 'field',
      placeholder: 'dateDebut',
      type: 'date',
      value: this.campagneIndemnisation?.dateDebut,
      disabled: true,
    },
    {
      itemType: 'field',
      placeholder: 'dateFin',
      type: 'date',
      value: this.campagneIndemnisation?.dateFin,
      disabled: false,
    },
    {
      itemType: 'field',
      placeholder: 'natureCampagne',
      type: 'text',
      value: this.campagneIndemnisation?.natureCampagne,
      disabled: true,
    },
    {
      itemType: 'textarea',  
      placeholder: 'commentaires',
      value:this.campagneIndemnisation?.Commentaires,
      rows: 4,  
      disabled: false,
    },
    {
      itemType: 'dropfile',  
      placeholder: 'upload',
      value: this.campagneIndemnisation?.file || '', 
      disabled: false,
    },
    {
      itemType: 'button',
      alignment: 'right',
      text: 'Modifier',
      disabled: false,
      action: 'enregistrer',    
      },
    {
      itemType: 'button',
      alignment: 'left',
      text: 'Annuler',
      type: 'submit',
      outlined:true,
      disabled: false,
      action: () => { this.redirectToConsultCompagne(this.campagneIndemnisation?.numCampagne) },    
    },
  ];
}
}
