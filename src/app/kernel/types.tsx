export interface ImagesResponseAPI {
  data: ImagesAPI;
}
export interface ImagesAPI {
  elapsedMilliseconds: number;
  count: number;
  countFacets: CountFacets;
  artObjects?: ArtObjectsEntity[];
  facets?: FacetsEntity[] | null;
}
export interface CountFacets {
  hasimage: number;
  ondisplay: number;
}
export interface ArtObjectsEntity {
  links: Links;
  id: string;
  objectNumber: string;
  title: string;
  hasImage: boolean;
  principalOrFirstMaker: string;
  longTitle: string;
  showImage: boolean;
  permitDownload: boolean;
  webImage: ArtImage;
  headerImage: ArtImage;
  productionPlaces?: (string | null)[] | null;
}
export interface Links {
  self: string;
  web: string;
}
export interface ArtImage {
  guid: string;
  offsetPercentageX: number;
  offsetPercentageY: number;
  width: number;
  height: number;
  url: string;
}
export interface FacetsEntity {
  facets?: FacetsObj[] | null;
  name: string;
  otherTerms: number;
  prettyName: number;
}
export interface FacetsObj {
  key: string;
  value: number;
}
