import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { UtilService } from 'src/app/providers/util/util.service';
import { PickerController } from '@ionic/angular'
import { PickerOptions } from '@ionic/core'
import { format, parseISO } from 'date-fns';
@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.page.html',
  styleUrls: ['./invitation.page.scss'],
})
export class InvitationPage implements OnInit {

  team_id: string;
  describe: string;
  players=[];
  training_add: any=[];
  player=[]
  playerStore: string;
  train_address:string
  invitSegment: string= 'training';
  team: boolean= true;
  group: boolean= false;
  individual: boolean= false;
  training_type:string;
  repeat:string;
  no: boolean= true;
  daily: boolean= false;
  weekly: boolean= false;
  selection: string;
    all : boolean= true
    staffOnly : boolean= false
    playerOnly : boolean= false
    Goalk : boolean= false
  
    add_calendar:boolean =true
    notificateion:boolean =true
    post_chat:boolean =true
    game_all : boolean= true
    game_staffOnly : boolean= false
    game_playerOnly : boolean= false
    game_Goalk : boolean= false

    clubid:any;
    value1 = '';
    value2 = '';
    value3 = '';
    value4 = '';
    value5 = '';
    value6 = '';

    // public store={
    //   id: '',
    //   team_id:'223c7dec-da29-b30f-7db4-4c25d18cba8c',
    //   describe : '',
    //   training_date: '',
    //   RDV_time : '',
    //   start_time: '',
    //   end_time: '',
    //   traing_Address: '',
    //   training_type:'',
    //   repeat: '',
    //   end_repeat:'',
    //   selection:'',
    //   add_to_calendar: '' ,
    //   send_notification: '',
    //   post_in_chat: '',
    //   player: ''
    // }
    
    public game={
      desc:'',
      opponent:'',
      address:'',
    }
    home:boolean=true;
    away:boolean=false
    timeget: any[] = [
      [],
      [
        '00', '01', '02', '03', '04', '05', '06', '07','08', '09', '10', '11','12','13', '14','15','16','17','18','19','20','21','22','23'
      ],
      ['00','01','02','03','04','05', '06','07', '08','09','10','11','12','13','14','15','16','17','18','19','20',
      '21','22','23','24','25', '26','27', '28','29','30','31','32','33','34','35','36','37','38','39','40',
      '41','42','43','44','45','46','47','48','49','50',
      '51','55','53','54','55', '56','57', '58','59', ],
      // ['am', 'pm'],
      [],
    ]//thurs
    numColumns: number = 4;
    numOptions: number = 74;

  constructor(private api :APIService,
              private pickercontrl : PickerController,
              private util : UtilService) { 
    this.playerSelect()
    // this.clubdatas()
    this.uniform()
              }

  ngOnInit() {
  }

  
  formatDate(value: string) {
    return format(parseISO(value), 'dd.MM.yyyy');
  }

  formatDates(value: string) {
    return format(parseISO(value), 'dd.MM.yyyy');
  }

  segmentInvitation(ev){
    console.log(ev)
  }

  playerSelect(){
    // this.team_id = '223c7dec-da29-b30f-7db4-4c25d18cba8c'
    this.api.ListPlayerdbs( {team_id: {eq: this.util.team_id}}).then(use =>{
      this.players = use.items
      console.log('use',this.players)
    })
    console.log('date',this.util.date)
    
    this.api.GetTeamdb(this.util.team_id).then(use =>{
      this.clubid = use.club_id
      console.log('use',use, this.clubid)
      this.api.GetClubdb(this.clubid).then(async(data) => {
        this.training_add.push(data);
        console.log('datasss',data)
      })
    })

   
  }

  // clubdatas(){
  //     console.log('datasss',this.clubid)
  //     const id ='5b0f07e1-381e-4c8e-99d2-4e0c813d4b0d'
  //   this.api.GetClubdb(this.clubid).then(async(data) => {
  //     this.training_add.push(data);
  //     console.log('datasss',data)
  //   })
  // }

  uniform(){
    // a9355d79-fa9f-c2fc-7167-709130bfc30d
   const id = '223c7dec-da29-b30f-7db4-4c25d18cba8c'
    this.api.GetDnadb(id).then(async(data)=>{
      console.log('dna',data)
    } )

  }
  selectall(select){
    if(select === 'select'){
      this.all = true
      this.staffOnly = false
      this.playerOnly= false
      this.Goalk = false
      this.selection = 'select all'
    console.log('selec',this.selection)
    }
    if(select === 'unselect'){
      this.all = false
      this.staffOnly = false
      this.playerOnly= false
      this.Goalk = false
     console.log('unsele')

    }
  }

  staffonly(staff){
    if(staff === 'staff'){
      this.all = false
      this.staffOnly = true
      this.playerOnly= false
      this.Goalk = false
      this.selection = 'staff only'
    console.log('selec',this.selection)

    }
    if(staff === 'unstaff'){
      // this.all = !this.all
      this.all = false
      this.staffOnly = false
      this.playerOnly= false
      this.Goalk = false
     console.log('unsele')
    }
  }

  playerO(play){
    if(play === 'play'){
      this.all = false
      this.staffOnly = false
      this.playerOnly= true
      this.Goalk = false
      this.selection = 'player only'
    console.log('selec',this.selection)
    }
    if(play === 'unplay'){
      this.all = false
      this.staffOnly = false
      this.playerOnly= false
      this.Goalk = false
     console.log('unplay')
    }
  }

  Goalke(goal){
    if(goal === 'goal'){
      this.all = false
      this.staffOnly = false
      this.playerOnly= false
      this.Goalk = true
      this.selection = 'GK'
    console.log('selec',this.selection)    }
    if(goal === 'ungoal'){
      // this.all = !this.all
      this.all = false
      this.staffOnly = false
      this.playerOnly= false
      this.Goalk = false
     console.log('ungoal')
    }
  }

  game_selection(goal){
    if(goal === 'gameall'){
      this.game_all = true
      this.game_staffOnly = false
      this.game_playerOnly= false
      this.game_Goalk = false
      this.selection = 'select all'
    console.log('selec',this.selection)    }
    if(goal === 'gameunall'){
      // this.all = !this.all
      this.game_all = false
      this.game_staffOnly = false
      this.game_playerOnly= false
      this.game_Goalk = false
     console.log('ungoal')
    }
// staff
    if(goal === 'gamestaff'){
      this.game_all = false
      this.game_staffOnly = true
      this.game_playerOnly= false
      this.game_Goalk = false
      this.selection = 'staff only'
    console.log('selec',this.selection)    }
    if(goal === 'gameunstaff'){
      // this.all = !this.all
      this.game_all = false
      this.game_staffOnly = false
      this.game_playerOnly= false
      this.game_Goalk = false
     console.log('ungoal')
    }

    //player
    if(goal === 'gameplayer'){
      this.game_all = false
      this.game_staffOnly = false
      this.game_playerOnly= true
      this.game_Goalk = false
      this.selection = 'staff only'
    console.log('selec',this.selection)  
    }
    if(goal === 'gameunplayer'){
      // this.all = !this.all
      this.game_all = false
      this.game_staffOnly = false
      this.game_playerOnly= false
      this.game_Goalk = false
     console.log('ungoal')
    }

     //gk
     if(goal === 'gameGoal'){
      this.game_all = false
      this.game_staffOnly = false
      this.game_playerOnly= false
      this.game_Goalk = true
      this.selection = 'staff only'
    console.log('selec',this.selection)  
    }
    if(goal === 'gameunGoal'){
      // this.all = !this.all
      this.game_all = false
      this.game_staffOnly = false
      this.game_playerOnly= false
      this.game_Goalk = false
     console.log('ungoal')
    }
  }

  
  teams(team){
    if(team === 'team'){
      this.team = true
      this.group = false
      this.individual= false
      this.training_type ='team'
      console.log('team', this.training_type)
    }
    if(team === 'unteam'){
      this.team = false
      this.group = false
      this.individual= false
    }
   
    if(team === 'group'){
      this.team = false
      this.group = true
      this.individual= false
      this.individual= false
      this.training_type ='group'
      console.log('group', this.training_type)
    }
    if(team === 'ungroup'){
      this.team = false
      this.group = false
      this.individual= false
    }
    if(team === 'indiv'){
      this.team = false
      this.group = false
      this.individual= true
      this.training_type ='individual'
      console.log('individual', this.training_type)
    }
    if(team === 'unindiv'){
      this.team = false
      this.group = false
      this.individual= false
    }

    // repeat
    if(team === 'no'){
      this.no = true
      this.daily = false
      this.weekly= false
      this.repeat='No'
      console.log('repeat', this.repeat)
    }
    if(team === 'not'){
      this.no = false
      this.daily = false
      this.weekly= false
    }

    if(team === 'daily'){
      this.no = false
      this.daily = true
      this.weekly= false
      this.repeat='daily'
      console.log('repeat', this.repeat)
    }
    if(team === 'notdaily'){
      this.no = false
      this.daily = false
      this.weekly= false
    }

    if(team === 'weekly'){
      this.no = false
      this.daily = false
      this.weekly= true
      this.repeat='weekly'
      console.log('weekly', this.repeat)
    }
    if(team === 'notweekly'){
      this.no = false
      this.daily = false
      this.weekly= false
    }

    // location
    if(team === 'home'){
      this.home = true
      this.away = false
      this.repeat='home'
      console.log('location', this.repeat)
    }
    if(team === 'unhome'){
      this.home = false
      this.away = false
    }
    if(team === 'away'){
      this.home = false
      this.away = true
      this.repeat='away'
      console.log('location', this.repeat)
    }
    if(team === 'unaway'){
      this.home = false
      this.away = false
    }
    
  }

  
  // time picker for date

  async rdvTime() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel',
        },
        {
          text: 'Ok',
          handler: (value1: any) => {
            console.log(value1);
            this.value1 = value1['col -1'].text + ':' + value1['col -2'].text;
          }
        }
      ],
      columns: this.getcolumnswed()
    };
    let picker = await this.pickercontrl.create(options);
    picker.present()
  }
  getcolumnswed() {
    let columns = []
    for (let i = 0; i < this.numColumns; i++) {
      columns.push({
        name: `col -${i}`,
        options: this.getColumnOptionswed(i)
      })
    }
    return columns;
  }
  getColumnOptionswed(columIndex: number) {
    let options = []
    for (let i = 0; i < this.numOptions; i++) {
      options.push({
        text: this.timeget[columIndex][i % this.numOptions],
        value1: i
      })
    }
    return options;
  }

// start time picker
  async StartTime() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel',
        },
        {
          text: 'Ok',
          handler: (value1: any) => {
            console.log(value1);
            this.value2 = value1['col -1'].text + ':' + value1['col -2'].text ;
          }
        }
      ],
      columns: this.getcolumnStart()
    };
    let picker = await this.pickercontrl.create(options);
    picker.present()
  }
  getcolumnStart() {
    let columns = []
    for (let i = 0; i < this.numColumns; i++) {
      columns.push({
        name: `col -${i}`,
        options: this.getColumnOptionStart(i)
      })
    }
    return columns;
  }
  getColumnOptionStart(columIndex: number) {
    let options = []
    for (let i = 0; i < this.numOptions; i++) {
      options.push({
        text: this.timeget[columIndex][i % this.numOptions],
        value1: i
      })
    }
    return options;
  }

  async EndTime() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel',
        },
        {
          text: 'Ok',
          handler: (value1: any) => {
            console.log(value1);
            this.value3 = value1['col -1'].text + ':' + value1['col -2'].text ;
          }
        }
      ],
      columns: this.getcolumnEnd()
    };
    let picker = await this.pickercontrl.create(options);
    picker.present()
  }
  getcolumnEnd() {
    let columns = []
    for (let i = 0; i < this.numColumns; i++) {
      columns.push({
        name: `col -${i}`,
        options: this.getColumnOptionEnd(i)
      })
    }
    return columns;
  }
  getColumnOptionEnd(columIndex: number) {
    let options = []
    for (let i = 0; i < this.numOptions; i++) {
      options.push({
        text: this.timeget[columIndex][i % this.numOptions],
        value1: i
      })
    }
    return options;
  }

  // game rdv times
  async gameTime(day:string) {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel',
        },
        {
          text: 'Ok',
          handler: (value1: any) => {
            console.log(value1);
            if(day === 'gamerdv'){
              this.value4 = value1['col -1'].text + ':' + value1['col -2'].text ;
            }
            if(day === 'gamestart'){
              this.value5 = value1['col -1'].text + ':' + value1['col -2'].text ;
            }
            if(day === 'gameEnd'){
              this.value6 = value1['col -1'].text + ':' + value1['col -2'].text ;
            }
          }
        }
      ],
      columns: this.getcolumnGame()
    };
    let picker = await this.pickercontrl.create(options);
    picker.present()
  }
  getcolumnGame() {
    let columns = []
    for (let i = 0; i < this.numColumns; i++) {
      columns.push({
        name: `col -${i}`,
        options: this.getColumnOptionGame(i)
      })
    }
    return columns;
  }
  getColumnOptionGame(columIndex: number) {
    let options = []
    for (let i = 0; i < this.numOptions; i++) {
      options.push({
        text: this.timeget[columIndex][i % this.numOptions],
        value1: i
      })
    }
    return options;
  }

  performedCalend(event){
    this.add_calendar = event.detail.checked
    console.log('eventtoggle',event, this.add_calendar)
  }

  performednoti(event){
    this.notificateion = event.detail.checked
    console.log('eventtoggle',event, this.notificateion)
  }
  performedChat(event){
    this.post_chat = event.detail.checked
    console.log('eventtoggle',event, this.post_chat)
  }
  chooseplayer(ev){
    console.log('player',ev)
    if(ev.detail.checked === true){
      console.log(ev.detail.value)
      this.player.push(ev.detail.value)
      this.player.forEach(res =>{
        this.playerStore = res
      console.log('playerStore',this.playerStore)
      })
      console.log(this.player)
    }else{
      this.player.forEach((data,index) =>{
         if(data === ev.detail.value){
           this.player.splice(index,1)
      console.log(this.player)
         }
      })
    }
   }

  //  const store={
  //   id: '',
  //   team_id:'223c7dec-da29-b30f-7db4-4c25d18cba8c',
  //   describe : this.describe,
  //   training_date: this.util.date,
  //   RDV_time : this.value1,
  //   start_time: this.value2,
  //   end_time: this.value3,
  //   traing_Address: this.train_address ? this.train_address : 'other',
  //   training_type: this.training_type ?  this.training_type: 'team',
  //   repeat: this.repeat ? this.repeat : 'No',
  //   end_repeat:this.util.reDate,
  //   selection:this.selection ? this.selection : 'select all',
  //   add_to_calendar: this.add_calendar ,
  //   send_notification: this.notificateion,
  //   post_in_chat: this.post_chat,
  //   player: this.player
  // }
  storedata(){
    const store={
     id: this.util.uid,
    team_id:'223c7dec-da29-b30f-7db4-4c25d18cba8c',
    describe : this.describe,
    training_date: this.util.date,
    RDV_time : this.value1,
    start_time: this.value2,
    end_time: this.value3,
    traing_Address: this.train_address ? this.train_address : 'other',
    training_type: this.training_type ?  this.training_type: 'team',
    repeat: this.repeat ? this.repeat : 'No',
    end_repeat: this.util.reDate,
    selection: this.selection ? this.selection : 'select all',
    add_to_calendar: this.add_calendar ,
    send_notification: this.notificateion,
    post_in_chat: this.post_chat,
    player: this.player
    }
    console.log('store',store)
    this.api.CreateTrainingdb(store).then(result =>{
      console.log('reeeee',result)
    }).catch(err =>{
      console.log('rej',err)
    })
  }


}
