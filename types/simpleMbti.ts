export interface ISimpleMbtiModel {
    responses: ISimpleMbtiResponseModel[];
}

export interface ISimpleMbtiQuestionModel {
    question: string;
    responseA: ISimpleMbtiResponseModel;
    responseB: ISimpleMbtiResponseModel;
}

export interface ISimpleMbtiResponseModel {
    title: string;
    value: string;
}
