# Diy 4 and 5

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.1.

## Description

The task of this project is to get familiarize with Angular, using `@input` and `@output`.
* This are the instructions:
    - Create an application that contains 3 components.
        - One component contains a __button__ with a sign __*plus*__ that clicking on it sends to parent a message to __increase__ the number.
        - One component contains a __button__ with a sign __*minus*__ on it sends to parent a message to __increase__ the number.
A component that contains a paragraph that displays the variable number by pressing the plus and minus button.
   

## STEP 1: Creating the app and the Components
   
First, we need to create the app, and the way we are going to do it is using the terminal and typing: `ng new --no -standalone diy-4`. And we need to acces that folder by typing `cd diy-4`.
  
Now we need to generate our components. We need three components for our buttons and the paragraph where we're going to disply the numbers. 
```
ng generate component plus-button
ng generate component minus-button
ng generate component display-number
```
These commands create the __PlusButtonComponent__, __MinusButtonComponent__, and __DisplayNumberComponent__ respectively, each with their own HTML, CSS, and TypeScript files.

## STEP 2 MODIFY THE COMPONENTS

First, lets modify our *app.component.ts*. Here we'll declare the functions, we need one button that increase the numbre, and an other one that decreases it
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  number: number = 0; // This variable holds the current value of the counter.

  increaseNumber() {
    this.number++; // This method increases the counter by 1.
  }

  decreaseNumber() {
    this.number--; // This method decreases the counter by 1.
  }
}

```
## STEP 3 Modify the buttons ts and html
The second component that we're going to modify is *plus-button.component.ts*. This component emits an event to the parent component to increase the number.
```ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-plus-button',
  templateUrl: './plus-button.component.html',
  styleUrls: ['./plus-button.component.css']
})
export class PlusButtonComponent {
  @Output() increase = new EventEmitter<void>(); // Event emitter to notify parent component.

  sendIncrease() {
    this.increase.emit(); // Emit the event when the button is clicked.
  }
}

```
We also need to modify the html of the plus button, so it would be displayed. Type this code to your plus-button.component.html:
```ts
<button (click)="sendIncrease()">+</button>
```
Now we have to modify the `minus-button.component.ts`.   
This component emits an event to the parent component to decrease the number.
```ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-minus-button',
  templateUrl: './minus-button.component.html',
  styleUrls: ['./minus-button.component.css']
})
export class MinusButtonComponent {
  @Output() decrease = new EventEmitter<void>(); // Event emitter to notify parent component.

  sendDecrease() {
    this.decrease.emit(); // Emit the event when the button is clicked.
  }
}
```
The HTML template for the minus button component:
```html
<button (click)="sendDecrease()">-</button>
```

## STEP 4 Modify display-number.component.ts
This component receives the number from the parent component and displays it.
```ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-number',
  templateUrl: './display-number.component.html',
  styleUrls: ['./display-number.component.css']
})
export class DisplayNumberComponent {
  @Input() number: number = 0; // Input property to receive the number from the parent component.
}
```
The HTML template for the display number component:
```html
<p>{{ number }}</p>
```
This displays the current value of the number

## STEP 5 Modify app.component.html

The main template includes the child components and handles their events:

```html
<div style="text-align:center">
  <h1>Counter App</h1>
  <app-plus-button (increase)="increaseNumber()"></app-plus-button>
  <app-minus-button (decrease)="decreaseNumber()"></app-minus-button>
  <app-display-number [number]="number"></app-display-number>
</div>
```
* `<app-plus-button (increase)="increaseNumber()"></app-plus-button>`: Includes the plus button component and binds its increase event to the increaseNumber method.
* `<app-minus-button (decrease)="decreaseNumber()"></app-minus-button>`: Includes the minus button component and binds its decrease event to the decreaseNumber method.
* `<app-display-number [number]="number"></app-display-number>`: Includes the display number component and binds its number input property to the number variable.

## STEP 6
Ensure all components are declared and the necessary modules are imported:
```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlusButtonComponent } from './plus-button/plus-button.component';
import { MinusButtonComponent } from './minus-button/minus-button.component';
import { DisplayNumberComponent } from './display-number/display-number.component';

@NgModule({
  declarations: [
    AppComponent,
    PlusButtonComponent,
    MinusButtonComponent,
    DisplayNumberComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
This module definition ensures that all the components are registered with the Angular application.# diy-4
