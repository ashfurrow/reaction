/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { ArtworkDetails_artwork$ref } from "./ArtworkDetails_artwork.graphql";
export type ArtworkDetails_Test_QueryVariables = {};
export type ArtworkDetails_Test_QueryResponse = {
    readonly artwork: ({
        readonly " $fragmentRefs": ArtworkDetails_artwork$ref;
    }) | null;
};
export type ArtworkDetails_Test_Query = {
    readonly response: ArtworkDetails_Test_QueryResponse;
    readonly variables: ArtworkDetails_Test_QueryVariables;
};



/*
query ArtworkDetails_Test_Query {
  artwork(id: "pablo-picasso") {
    ...ArtworkDetails_artwork
    __id
  }
}

fragment ArtworkDetails_artwork on Artwork {
  ...ArtworkDetailsAboutTheWorkFromArtsy_artwork
  ...ArtworkDetailsAboutTheWorkFromPartner_artwork
  ...ArtworkDetailsChecklist_artwork
  ...ArtworkDetailsAdditionalInfo_artwork
  ...ArtworkDetailsArticles_artwork
  articles(size: 10) {
    id
    __id
  }
  literature
  exhibition_history
  __id
}

fragment ArtworkDetailsAboutTheWorkFromArtsy_artwork on Artwork {
  description(format: HTML)
  __id
}

fragment ArtworkDetailsAboutTheWorkFromPartner_artwork on Artwork {
  is_in_auction
  additional_information(format: HTML)
  partner {
    name
    initials
    locations {
      city
      __id
    }
    profile {
      ...FollowProfileButton_profile
      id
      icon {
        url(version: "square140")
      }
      __id
    }
    __id
  }
  __id
}

fragment ArtworkDetailsChecklist_artwork on Artwork {
  framed {
    label
    details
  }
  signatureInfo {
    label
    details
  }
  conditionDescription {
    label
    details
  }
  certificateOfAuthenticity {
    label
    details
  }
  __id
}

fragment ArtworkDetailsAdditionalInfo_artwork on Artwork {
  series
  publisher
  manufacturer
  provenance
  image_rights
  __id
}

fragment ArtworkDetailsArticles_artwork on Artwork {
  articles(size: 10) {
    author {
      name
      __id
    }
    href
    published_at(format: "MMM Do, YYYY")
    thumbnail_image {
      resized(width: 300) {
        url
      }
    }
    thumbnail_title
    __id
  }
  __id
}

fragment FollowProfileButton_profile on Profile {
  __id
  id
  is_followed
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "pablo-picasso",
    "type": "String!"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "label",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "details",
    "args": null,
    "storageKey": null
  }
],
v3 = [
  {
    "kind": "Literal",
    "name": "format",
    "value": "HTML",
    "type": "Format"
  }
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ArtworkDetails_Test_Query",
  "id": null,
  "text": "query ArtworkDetails_Test_Query {\n  artwork(id: \"pablo-picasso\") {\n    ...ArtworkDetails_artwork\n    __id\n  }\n}\n\nfragment ArtworkDetails_artwork on Artwork {\n  ...ArtworkDetailsAboutTheWorkFromArtsy_artwork\n  ...ArtworkDetailsAboutTheWorkFromPartner_artwork\n  ...ArtworkDetailsChecklist_artwork\n  ...ArtworkDetailsAdditionalInfo_artwork\n  ...ArtworkDetailsArticles_artwork\n  articles(size: 10) {\n    id\n    __id\n  }\n  literature\n  exhibition_history\n  __id\n}\n\nfragment ArtworkDetailsAboutTheWorkFromArtsy_artwork on Artwork {\n  description(format: HTML)\n  __id\n}\n\nfragment ArtworkDetailsAboutTheWorkFromPartner_artwork on Artwork {\n  is_in_auction\n  additional_information(format: HTML)\n  partner {\n    name\n    initials\n    locations {\n      city\n      __id\n    }\n    profile {\n      ...FollowProfileButton_profile\n      id\n      icon {\n        url(version: \"square140\")\n      }\n      __id\n    }\n    __id\n  }\n  __id\n}\n\nfragment ArtworkDetailsChecklist_artwork on Artwork {\n  framed {\n    label\n    details\n  }\n  signatureInfo {\n    label\n    details\n  }\n  conditionDescription {\n    label\n    details\n  }\n  certificateOfAuthenticity {\n    label\n    details\n  }\n  __id\n}\n\nfragment ArtworkDetailsAdditionalInfo_artwork on Artwork {\n  series\n  publisher\n  manufacturer\n  provenance\n  image_rights\n  __id\n}\n\nfragment ArtworkDetailsArticles_artwork on Artwork {\n  articles(size: 10) {\n    author {\n      name\n      __id\n    }\n    href\n    published_at(format: \"MMM Do, YYYY\")\n    thumbnail_image {\n      resized(width: 300) {\n        url\n      }\n    }\n    thumbnail_title\n    __id\n  }\n  __id\n}\n\nfragment FollowProfileButton_profile on Profile {\n  __id\n  id\n  is_followed\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ArtworkDetails_Test_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artwork",
        "storageKey": "artwork(id:\"pablo-picasso\")",
        "args": v0,
        "concreteType": "Artwork",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ArtworkDetails_artwork",
            "args": null
          },
          v1
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ArtworkDetails_Test_Query",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artwork",
        "storageKey": "artwork(id:\"pablo-picasso\")",
        "args": v0,
        "concreteType": "Artwork",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "certificateOfAuthenticity",
            "storageKey": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "plural": false,
            "selections": v2
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": v3,
            "storageKey": "description(format:\"HTML\")"
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "is_in_auction",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "additional_information",
            "args": v3,
            "storageKey": "additional_information(format:\"HTML\")"
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "partner",
            "storageKey": null,
            "args": null,
            "concreteType": "Partner",
            "plural": false,
            "selections": [
              v4,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "initials",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "locations",
                "storageKey": null,
                "args": null,
                "concreteType": "Location",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "city",
                    "args": null,
                    "storageKey": null
                  },
                  v1
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "profile",
                "storageKey": null,
                "args": null,
                "concreteType": "Profile",
                "plural": false,
                "selections": [
                  v1,
                  v5,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "is_followed",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "icon",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Image",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "url",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "version",
                            "value": "square140",
                            "type": "[String]"
                          }
                        ],
                        "storageKey": "url(version:\"square140\")"
                      }
                    ]
                  }
                ]
              },
              v1
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "framed",
            "storageKey": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "plural": false,
            "selections": v2
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "signatureInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "plural": false,
            "selections": v2
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "conditionDescription",
            "storageKey": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "plural": false,
            "selections": v2
          },
          v1,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "series",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "publisher",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "manufacturer",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "provenance",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "image_rights",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "articles",
            "storageKey": "articles(size:10)",
            "args": [
              {
                "kind": "Literal",
                "name": "size",
                "value": 10,
                "type": "Int"
              }
            ],
            "concreteType": "Article",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "author",
                "storageKey": null,
                "args": null,
                "concreteType": "Author",
                "plural": false,
                "selections": [
                  v4,
                  v1
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "href",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "published_at",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "format",
                    "value": "MMM Do, YYYY",
                    "type": "String"
                  }
                ],
                "storageKey": "published_at(format:\"MMM Do, YYYY\")"
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "thumbnail_image",
                "storageKey": null,
                "args": null,
                "concreteType": "Image",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "resized",
                    "storageKey": "resized(width:300)",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "width",
                        "value": 300,
                        "type": "Int"
                      }
                    ],
                    "concreteType": "ResizedImageUrl",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "url",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "thumbnail_title",
                "args": null,
                "storageKey": null
              },
              v1,
              v5
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "literature",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "exhibition_history",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
(node as any).hash = '31c502bc018fb60c674cbc19e37b7d94';
export default node;
