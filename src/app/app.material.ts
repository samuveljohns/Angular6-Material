import {
    NgModule
} from '@angular/core';
import {
    CommonModule
} from '@angular/common';
import {
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatChipsModule,
    MatGridListModule,
    MatListModule,
    MatSidenavModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatDialogModule,
    MatProgressBarModule,
    MatDialog,
    MAT_DIALOG_DATA,
    MatNativeDateModule,
    MatSelectModule
} from '@angular/material';
import {
    MatDatepickerModule
} from '@angular/material/datepicker';
import { LayoutModule } from '@angular/cdk/layout';
@NgModule({
    imports: [
        // MatDialog,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule, MatMenuModule,
        MatIconModule,
        MatChipsModule,
        MatSelectModule,
        MatGridListModule,
        MatListModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatTabsModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatSortModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatDialogModule,
        LayoutModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatSelectModule,
        MatChipsModule,
        MatGridListModule,
        MatListModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatTabsModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatSortModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatDialogModule,
        MatProgressBarModule
        
    ],
})
export class AppMaterialModule {}
