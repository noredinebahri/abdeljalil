import { Component, Input } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";
import { StatusDossier } from "../../../../../enums/status-dossier";
import { IDepotExceptionnel } from "../../../../../models/depot-exceptionnel";
import { DepotExceptionnelService } from "../../../../../services/deposant/depot-exceptionnel.service";
import { ToastService } from 'src/app/shared/components/toast/toast.service';

@Component({
  selector: 'app-confirm-depot-modal',
  templateUrl: './confirm-depot-modal.component.html',
  styleUrls: ['./confirm-depot-modal.component.scss']
})
export class ConfirmDepotModalComponent {
  @Input() depotData?: IDepotExceptionnel;
  @Input() isDraft: boolean = false;

  constructor(
    public activeModal: NgbActiveModal,
    private router: Router,
    private depotService: DepotExceptionnelService,
    private toastService: ToastService
  ) {}

  close() {
    this.activeModal.close();
  }

  confirm() {
    /*const status = this.isDraft ? StatusDossier.BROUILLON : StatusDossier.EN_COURS;
    const depotDataStr = localStorage.getItem('depotData');

    if (depotDataStr) {
      const depotData: IDepotExceptionnel = JSON.parse(depotDataStr);
      depotData.status = status;

      this.depotService.addDepot(depotData).subscribe(
        (response) => {
          console.log('Depot added successfully', response);
          this.activeModal.close(status);
          this.router.navigate(['/detail-depot'], { queryParams: { status: status } });
        },
        (error) => {
          console.error('Error adding depot', error);
        }
      );
    } else {
      console.error('No depot data found in local storage');
    }*/
      this.activeModal.close();
      this.toastService.showSuccess('le dépôt exceptionnel a été ajouté avec succès.');
  }

  back() {
    this.activeModal.dismiss({ action: 'back', data: this.depotData });
  }

  consultFile(file: any) {
    const imageTypes = ['image/jpeg', 'image/png'];
    if (file.fileType === 'application/pdf' ||
      file.fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
      imageTypes.includes(file.fileType)) {
      window.open(file.url, '_blank');
    } else {
      console.log('File type not supported for in-browser viewing');
    }
  }
}
