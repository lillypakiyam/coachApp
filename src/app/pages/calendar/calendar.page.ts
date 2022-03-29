import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import { UtilService } from 'src/app/providers/util/util.service';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  // calender
  public currMonth = { value: 0 };
  public currYear = { value: 0 };
  public currDate: Date;
  public today = { 
    date:0,  
    month:0,
    year: 0
  }
  public months =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public month: string;
  public days = [];
  public success = false;
  // calender end

  constructor(private alert: AlertController,
    private util: UtilService) {
    this.load()
     }

  ngOnInit() {
  }

   // calendar start
   load(){
    this.currDate = new Date();
    console.log(this.currDate.getDate(), this.currDate.getMonth());
    this.currMonth = { value: this.currDate.getMonth() };
    this.currYear = { value: this.currDate.getFullYear() };
    this.month = this.months[this.currMonth.value];
     this.today = {
       date: this.currDate.getDate(),
       month: this.currDate.getMonth() + 1,
       year: this.currDate.getFullYear() 
     }
    this.getCalendar(this.currMonth.value, this.currYear.value);
 }

 getCalendar(month, year){
   this.days = [];
   let days_of_month =  [31, this.febDays(year), 31, 30, 31, 30, 31, 31, 30, 31 ,30, 31];
   let day_one = new Date(year, month, 1);
   //console.log(day_one.getDay(), day_one.getMonth());
   this.logDayDate(day_one.getDay());
   let month_of_day = days_of_month[day_one.getMonth()];
   for(let i=1; i<=month_of_day; i++){
     const day = { 
       date: i,
       month: this.currMonth.value + 1,
       year: this.currYear.value
     }   
     this.days.push(day);   
   }
   console.log(this.days);
   this.days.forEach(day => {
      if(day.date === this.today.date && day.month === this.today.month && day.year === this.today.year){
     console.log('true', day);}
   });
   
 }


 febDays(year){
    return this.isLeapYear(year) ? 29 : 28
 }

 isLeapYear(year){
   return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 == 0 && year % 400 === 0)
 }

 logDayDate(nday){
   for(let i=0; i<nday; i++){
     let a = 0;
     this.days.push(a);
   }  
 }

 prevMonth(){
   const check_month = this.currMonth.value === 0 ? 11 : this.currMonth.value - 1;
   this.month = this.months[check_month];
   if(this.currMonth.value === 0) { this.currYear.value = this.currYear.value - 1; }
   this.currMonth.value = check_month;
   console.log(this.currMonth.value, this.currYear.value);
   this.getCalendar(this.currMonth.value, this.currYear.value);
 }

 nextMonth(){
   const check_month = this.currMonth.value === (this.months.length - 1) ? 0 : this.currMonth.value + 1;
   this.month = this.months[check_month];
   if(this.currMonth.value === (this.months.length - 1)){
     this.currYear.value = this.currYear.value + 1; 
   }
   this.currMonth.value = check_month; 
   console.log(this.currMonth.value, this.currYear.value);
   this.getCalendar(this.currMonth.value, this.currYear.value);  
 }


 async chooseDates(item){

  if(item.date !== undefined){
    const d1 = new Date(`${item.year}-${item.month}-${item.date}`);
    const d2 = new Date(`${this.today.year}-${this.today.month}-${this.today.date}`);
    if(d1 < d2){
        console.log('date Expired');  
        // this.dateChoosed = false;
        // const toast = await this.util.createToast('Date Expired','bottom');
        // await toast.present();
    }else{ 
     const date = item.date < 10 ? '0'+item.date : item.date;
     const month = item.month < 10 ? '0'+item.month : item.month;
     const choosen_day = item.year+'-'+month+'-'+date;
     console.log('Date',choosen_day);
     this.util.date = choosen_day;
    //  this.util.date = choosen_day;
    this.util.reDate = choosen_day
      const alert = await this.alert.create({
        cssClass: 'my-custom-class',
        header: 'Confirm!',
        message: 'Do you want to Add Events?',
        buttons:[
          {
           text: 'No',
           role: 'cancel',
           cssClass: 'secondary',
           handler: (blah) => {
             console.log('Confirm Cancel: blah');
           },
          },
          {
           text: 'Yes',
           handler: async(datang:any) => {
            this.util.goToRoot('/invitation')
            
           }
         }
       ]
     });
     await alert.present();
      
    }
   }
 }

 currDateStyle(day): Object{
  const d1 = new Date(`${day.year}-${day.month}-${day.date}`);
  const d2 = new Date(`${this.today.year}-${this.today.month}-${this.today.date}`);
  
  if((day.date === this.today.date && day.month === this.today.month && day.year === this.today.year) === true){
    return { 'background-color': 'darkturquoise', 'color': 'white', 'border-radius': '50%', 'padding': '4px' , 'text-align': 'center' }
  }if(d1 < d2){
    //console.log(day);
    return { 'background-color': 'none','color':'black' }  
  }
  if(d1>d2){
    return { 'background-color': 'none','color': 'black' }  
  } 
  }
}
