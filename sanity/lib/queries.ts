import { defineQuery } from 'next-sanity';

export const EventsQuery = defineQuery(
  `*[_type == "events"] | order(_createdAt desc){
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    content,
    venue,
    location_on_google_maps,
    "cardImage": card_image{asset->{url}, alt},
    from_date,
    to_date
  }`,
);

export const EventBySlugQuery = defineQuery(
  `*[_type == "events" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    content,
    venue,
    location_on_google_maps,
    "cardImage": card_image{asset->{url}, alt},
    from_date,
    to_date
  }`,
);

export const IssuesQuery = defineQuery(
  `*[_type == "issues"] | order(_createdAt desc){
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    coordinators,
    "cardImage": card_image{asset->{url}, alt},
  }`,
);

export const IssueBySlugQuery = defineQuery(
  `*[_type == "issues" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    coordinators,
    "cardImage": card_image{asset->{url}, alt},
    "pdfUrl": pdf.asset->url,
    
    articles[] {
      title,
      authors,
      keywords,
      abstract,
      "pdfUrl": pdf.asset->url
    }
  }`,
);

export const AllNewsQuery = defineQuery(
  `*[_type == "news"] | order(_createdAt desc){
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    content,
    "cardImage": card_image{asset->{url}, alt},
    date
  }`,
);

export const NewsBySlugQuery = defineQuery(
  `*[_type == "news" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    content,
    "cardImage": card_image{asset->{url}, alt},
    date
  }`,
);

export const NoticesQuery = defineQuery(
  `*[_type == "notice"] | order(uploadedDate desc){
    _id,
    name,
    "fileUrl": noticeFile.asset->url,
    "fileType": noticeFile.asset->extension,
    uploadedDate
  }`,
);
