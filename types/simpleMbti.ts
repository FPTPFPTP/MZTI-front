export interface ISimpleMbtiModel {
    EorI: 'E' | 'I';
    SorN: 'S' | 'N';
    ForT: 'F' | 'T';
    JorP: 'J' | 'P';
}

export interface ISimpleMbtiQuestionModel {
    qustion: string;
    responseA: ISimpleMbtiResponseModel;
    responseB: ISimpleMbtiResponseModel;
}

export interface ISimpleMbtiResponseModel {
    title: string;
    value: string;
}
