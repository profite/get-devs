import { Component, OnInit } from '@angular/core';

declare var data:any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  //clothes
  /*
  items = [
   {photo: 'image01.png', name: 'Bata bordada', price: 398, plots: 5},
   {photo: 'image02.png', name: 'Blusa tricot canelada', price: 288, plots: 5}, 
   {photo: 'image03.png', name: 'Bata bordada', price: 398, plots: 5},  
   {photo: 'image04.png', name: 'Blusa tricot canelada', price: 288, plots: 5}, 
   {photo: 'image05.png', name: 'Bata bordada', price: 398, plots: 5}, 
   {photo: 'image06.png', name: 'Blusa tricot canelada', price: 288, plots: 5}
  ];
  */
  
  allProducts = [];
  products = [];
  arrayFilter = [];
  limitItems = 6;
  inicio = true;

  constructor() { }

  ngOnInit() { 
    this.getData();
  }

  changeStyleItemOnClick(nroItem) {
    const elemento = (document.querySelector('.modalDialog-filter-sizes-options__item--'+nroItem) as HTMLElement); 
    
    if(elemento.style.color !== 'rgb(0, 0, 0)') {
      elemento.style.borderColor = '#ff9f1c';
      elemento.style.color = '#000000';
    }
    else {
      elemento.style.borderColor = '#9f9f9f';
      elemento.style.color = '#9f9f9f';
    }
  }

  showAndHideDiv(nameID, signalID) {
    const modalElementColor = (document.querySelector('.modalDialog-filter-colors') as HTMLElement);
    const modalElementSize = (document.querySelector('.modalDialog-filter-sizes') as HTMLElement);
    const modalElementPrice = (document.querySelector('.modalDialog-filter-price') as HTMLElement);
    
    const element = (document.querySelector('#'+nameID) as HTMLElement);
    const signal = (document.querySelector('#'+signalID));
    
    if(nameID != 'divSize') {
      if(element.style.display === 'block' || element.style.display === '') {
        element.style.display = 'none';
        signal.textContent = '+';

        if(nameID == 'divColors') {
          modalElementColor.style.paddingRight = '33px';
        } 
        else {
          modalElementPrice.style.paddingRight = '33px';
        }
      }

      else {
        element.style.display = 'block';
        signal.textContent = '-';

        if(nameID === 'divColor') {
          modalElementColor.style.paddingRight = '45px';
        } 
        else {
          modalElementPrice.style.paddingRight = '45px';
        }
      }
    }

    else {
      if(element.style.display === 'flex' || element.style.display === '') {
        element.style.display = 'none';
        signal.textContent = '+';
        modalElementSize.style.paddingRight = '33px';
      }
      else {
        element.style.display = 'flex';
        signal.textContent = '-';
        modalElementSize.style.paddingRight = '45px';
      }
    }
    
  }

  getData() {
    const parse = JSON.parse(data);
    this.allProducts = parse.map(function(elem) { return elem; });
    this.products = parse.map(function(elem){ return elem; })
  }

  loadMoreItens() {
    const products = (document.querySelectorAll('.main-products-list-item') as NodeListOf<Element>);
    for(let i = 0; i < products.length; i++) {
      (products[i] as HTMLElement).classList.remove('no-width');
    }
    this.limitItems = this.allProducts.length;
  }

  filterByColor(color, id) {
    const checkedStatus = <HTMLInputElement>document.querySelector('#'+id);
    const parse = JSON.parse(data);
    let array = []
    const limit = this.limitItems;

    if(checkedStatus.checked == true) {
      parse.forEach(function(elem){
        if(elem.color == color) array.push(elem);
      })
      this.arrayFilter = this.arrayFilter.concat(array);
      this.allProducts = this.arrayFilter;
      this.limitItems = this.allProducts.length;
    }
    else {
      this.arrayFilter = this.arrayFilter.filter(elem => elem.color != color);
      this.allProducts = this.arrayFilter.filter(elem => elem.color != color);

      if(this.allProducts.length == 0) {
        this.allProducts = this.products;
        this.arrayFilter = [];
        this.limitItems = this.allProducts.length;
      }
    }    

    this.inicio = false;
  }


  filterBySize(value, id) {
    const checkedStatus = <HTMLInputElement>document.querySelector('#'+id);
    const parse = JSON.parse(data);
    let array = []
    if(checkedStatus.style.borderColor == 'rgb(255, 159, 28)' || checkedStatus.style.borderColor == '') {
      parse.forEach(function(elem){
        if(elem.size == value) array.push(elem);
      })
      this.arrayFilter = this.arrayFilter.concat(array);
      this.allProducts = this.arrayFilter;
      this.limitItems = this.allProducts.length;
    }
    else {
      this.arrayFilter = this.arrayFilter.filter(elem => elem.size != value);
      this.allProducts = this.arrayFilter.filter(elem => elem.size != value);
      if(this.allProducts.length == 0) {
        this.allProducts = this.products;
        this.arrayFilter = [];
        this.limitItems = this.allProducts.length;
      }
      this.limitItems = this.allProducts.length;
    }
    this.inicio = false;
  }

  filterByPrice(value, id) {
    const checkedStatus = <HTMLInputElement>document.querySelector('#'+id);
    const parse = JSON.parse(data);
    let array = []

    if(checkedStatus.checked == true) {
      parse.forEach(function(elem){
        if(elem.range == value) array.push(elem);
      })
      this.arrayFilter = this.arrayFilter.concat(array);
      this.allProducts = this.arrayFilter;
      this.limitItems = this.allProducts.length;
    }
    else {
      this.arrayFilter = this.arrayFilter.filter(elem => elem.range != value);
      this.allProducts = this.arrayFilter.filter(elem => elem.range != value);

      if(this.allProducts.length == 0) {
        this.allProducts = this.products;
        this.arrayFilter = [];
        this.limitItems = this.allProducts.length;
      }
      this.limitItems = this.allProducts.length;
    }
    this.inicio = false;
  }

  orderBy(value) {
    const arraySize = this.allProducts.length;
    const itemsInPage = this.allProducts.slice(0,this.limitItems)
    //order by low
    if(value == 'menor') {
        const limitItemsProducts = itemsInPage.sort(function(a,b) { return a.price-b.price})
        for(let i = 0; i < this.limitItems; i++)
          this.allProducts[i] = limitItemsProducts[i];
    } 
    //order by high
    else if(value == 'maior') {
      const limitItemsProducts = itemsInPage.sort(function(a,b) { return b.price-a.price})
        for(let i = 0; i < this.limitItems; i++)
          this.allProducts[i] = limitItemsProducts[i];
    }
    //order by date
    else {
        const limitItemsProducts = itemsInPage.sort(function(a,b) { 
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        for(let i = 0; i < this.limitItems; i++)
          this.allProducts[i] = limitItemsProducts[i];
    }
  }
}
