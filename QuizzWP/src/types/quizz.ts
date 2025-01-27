export type QuizzList = {
    id: number
    date: string
    date_gmt: string
    guid: {
      rendered: string
    }
    modified: string
    modified_gmt: string
    slug: string
    status: string
    type: string
    link: string
    title: {
      rendered: string
    }
    content: {
      rendered: string
      protected: boolean
    }
    template: string
    questions: Array<number>
    class_list: Array<string>
    description: string
    image: {
      ID: string
      post_author: string
      post_date: string
      post_date_gmt: string
      post_content: string
      post_title: string
      post_excerpt: string
      post_status: string
      comment_status: string
      ping_status: string
      post_password: string
      post_name: string
      to_ping: string
      pinged: string
      post_modified: string
      post_modified_gmt: string
      post_content_filtered: string
      post_parent: string
      guid: string
      menu_order: string
      post_type: string
      post_mime_type: string
      comment_count: string
      pod_item_id: string
    }
    questions_du_quizz: Array<{
      titre_de_la_question: string
      reponse_: string
      quizz: number
      term_id: number
      name: string
      slug: string
      description: string
      taxonomy: string
      parent: number
      term_taxonomy_id: number
      term_group: number
      count: number
      object_id: any
      term_order: any
      id: number
    }>
    _links: {
      self: Array<{
        href: string
        targetHints: {
          allow: Array<string>
        }
      }>
      collection: Array<{
        href: string
      }>
      about: Array<{
        href: string
      }>
      "wp:featuredmedia": Array<{
        embeddable: boolean
        href: string
      }>
      "wp:attachment": Array<{
        href: string
      }>
      "wp:term": Array<{
        taxonomy: string
        embeddable: boolean
        href: string
      }>
      curies: Array<{
        name: string
        href: string
        templated: boolean
      }>
    }
  }
  