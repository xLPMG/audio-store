import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
 public openDropDown(): void {

  const toggleBtnIcon = document.querySelector('.toggle_btn mat-icon');
  const dropDownMenu = document.querySelector('.dropdown-menu');

if(dropDownMenu){
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');
  if(toggleBtnIcon){
    toggleBtnIcon.innerHTML = isOpen ? 'close' : 'menu';
  }
 }}
}
