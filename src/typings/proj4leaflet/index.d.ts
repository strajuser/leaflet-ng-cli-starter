declare namespace L {
    namespace Proj {
        export class CRS implements L.CRS {
            constructor(name: string, proj4Str: string, options?: any);

            projection: L.Projection;
            transformation: L.Transformation;

            latLngToPoint(latlng: LatLngExpression, zoom: number): Point;
            pointToLatLng(point: PointExpression, zoom: number): LatLng;
            project(latlng: LatLng | LatLngLiteral): Point;
            unproject(point: PointExpression): LatLng;
            scale(zoom: number): number;
            zoom(scale: number): number;
            getProjectedBounds(zoom: number): Bounds;
            distance(latlng1: LatLngExpression, latlng2: LatLngExpression): number;
            wrapLatLng(latlng: LatLng | LatLngLiteral): LatLng;

            code?: string;
            wrapLng?: [number, number];
            wrapLat?: [number, number];
            infinite: boolean;
        }

        export interface Projection {
        }  
    }
}

declare module 'proj4leaflet' {
    export = L;
}
