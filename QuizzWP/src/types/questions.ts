export type QuestionsByID = {
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
  template: string
  class_list: Array<string>
  titre_de_la_question: string
  reponse_: string
  propositions: Array<string>
  variation_acceptee: string
  quizz_relies: Array<{
    description: string
    image: string
    difficulte: string
    questions_du_quizz: Array<number>
    ID: number
    post_title: string
    post_content: string
    post_excerpt: string
    post_author: string
    post_date: string
    post_date_gmt: string
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
    post_parent: number
    guid: string
    menu_order: number
    post_type: string
    post_mime_type: string
    comment_count: string
    comments: boolean
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
    "wp:attachment": Array<{
      href: string
    }>
    curies: Array<{
      name: string
      href: string
      templated: boolean
    }>
  }
}
  