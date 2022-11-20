export interface ICoordinatesMap {
    latitude: number;
    longitude: number;
}

export interface ICoordinatesMapWithMessage extends ICoordinatesMap {
    message: string;
}