import {FILETYPES} from "../../../enums/fileType";
import { Component, EventEmitter, Input, Output, ElementRef, Renderer2, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
import {IFile} from "../../../models/depot-exceptionnel";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploadComponent),
      multi: true
    }
  ]
})
export class FileUploadComponent implements ControlValueAccessor {
  @Input() maxFileSize = 10;
  @Input() theme: 'dark' | 'default' = 'default';
  @Input() readonly = false;
  @Output() fileSelected = new EventEmitter<IFile[]>();
  fileTooLarge = false;
  showProgressBar = false;
  uploadProgress = 0;
  acceptedFileTypes: string[] = Object.values(FILETYPES);
  uploadedFiles: IFile[] = [];
  private onChange: (files: IFile[]) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  onFilesSelected(event: any) {
    const files = event.target.files;
    const newFiles: IFile[] = [];
    for (let file of files) {
      if (file.size <= this.maxFileSize * 1024 * 1024) {
        const fileUrl = URL.createObjectURL(file);
        const newFile: IFile = {
          name: file.name,
          size: (file.size / 1024 / 1024).toFixed(1),
          progress: 0,
          uploadComplete: false,
          url: fileUrl, // Store the Blob URL
          fileType: file.type
        };
        newFiles.push(newFile);
        this.startUpload(file, newFile);
      } else {
        this.fileTooLarge = true;
      }
    }
    this.uploadedFiles = [...this.uploadedFiles, ...newFiles];
    this.fileSelected.emit(this.uploadedFiles);
    this.onChange(this.uploadedFiles); // Notify the form control of the new value
  }

  // checkFilesType(files:FileList){
  //   if(files){
  //     for(let i = 0; i < files.length; i++){
  //       const fileName: string = files[i].name;
  //       const ext: string = fileName.substring(fileName.lastIndexOf('.') + 1);
  //       console.log("check file extension", ext)
  //       return ext;
  //     }
  //   }
  // }

  onDragOver(event: Event) {
    event.preventDefault();
    this.renderer.addClass(this.el.nativeElement.querySelector('.upload-area'), 'dragover');
  }

  onDragLeave(event: Event) {
    event.preventDefault();
    this.renderer.removeClass(this.el.nativeElement.querySelector('.upload-area'), 'dragover');
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.renderer.removeClass(this.el.nativeElement.querySelector('.upload-area'), 'dragover');
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.onFilesSelected({ target: { files: files } });
    }
  }

  startUpload(file: File, fileData: IFile) {
    const fileSize = file.size / 1024 / 1024;
    const increment = fileSize < 2 ? 20 : fileSize < 5 ? 10 : 5;

    const interval = setInterval(() => {
      if (fileData?.progress !== undefined && fileData.progress < 100) {
        fileData.progress += increment;
        fileData.progress = Math.min(fileData?.progress, 100);
      } else {
        clearInterval(interval);
        fileData.uploadComplete = true;
      }
    }, 500);
  }

  removeFile(index: number) {
    this.uploadedFiles.splice(index, 1);
    this.fileSelected.emit(this.uploadedFiles);
    this.onChange(this.uploadedFiles); // Update the form control value
  }

  consultFile(file: IFile) {
    const imageTypes = ['image/jpeg', 'image/png'];
    if (file.fileType === 'application/pdf' ||
      file.fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
      imageTypes.includes(<string>file.fileType)) {
      window.open(file.url, '_blank');
    } else {
      console.log('File type not supported for in-browser viewing');
    }
  }
  // ControlValueAccessor methods
  writeValue(value: IFile[]): void {
    if (Array.isArray(value)) {
      this.uploadedFiles = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implement if you need to handle the disabled state
  }
}
