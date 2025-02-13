export interface BannerTypes {
    bgImage: string;
    page: string;
}

export interface BannerTextTypes {
    bannerData: {
        boldedWord?: string;
        title?: string;
    };
}

export interface BannerContentTypes {
    id: number;
    page: string;
    boldedWord?: string;
    title?: string;
}