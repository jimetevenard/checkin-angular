export class Guest {

    

    constructor(public nom: string, public prenom: string, public mail: string,public id: string,public checkins: number){

    }

    checkIn(): void {
        if(!this.isCheckedIn()){
            this.checkins = 1;            
        }
    }

    overCheckIn(): void {
        this.checkins++;
    }

    isCheckedIn(): boolean {
        return this.checkins > 0;
    }

}

