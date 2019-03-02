/**
 * Create a new data (JS) file plus a new Markdown file for a post
 * Checking if the new ID is not already been used by a previously created file
 */

const fs = require('fs-extra')
const klaw = require( 'klaw-sync' )
const ldate = require( './getDate' )

const fileExists = ( path_s, id_s ) =>
{
  const files_a = klaw( path_s, {nodir: true} )
  let atpath, atid
  for ( let at=0; at < files_a.length; ++at )
  {
    atpath = files_a[at].path
    atid = atpath.substring( atpath.lastIndexOf( '/' ) + 1 ).split('.')[0]
    if ( id_s === atid )
    {
      console.log( `${atid}.js exists: no need to create`)
      return true
    }
  }
  return false
}

module.exports =
{
  createPost: ( post_o ) =>
  {
    let now_s, locale_s
    ( { now_s, locale_s } = ldate.getLocaleDate() )
    const postID = `${now_s}-${post_o.id}`
    if ( fileExists( `content/${post_o.plink}/items/`, postID ) ) return

    let despath = `content/${post_o.plink}/items/${now_s}-${post_o.id}.md`
    let srcpath = `../prototypes/content/YYYY-MM-dd-post.md`
    const read_o  = {encoding:'utf-8', flag:'r'}
    const write_o = {encoding:'utf-8', flag:'w'}
    let buffer = fs.readFileSync( srcpath, read_o )
    buffer = buffer
    .replace( /_ID_/g,       post_o.id )
    .replace( /_LAYOUT_/g,   post_o.layout )
    .replace( /_PLINK_/g,    post_o.plink )
    .replace( /_TAGS_/g,     post_o.tags )
    .replace( /_IMG_/g,      post_o.image )
    .replace( /_TITLE_/g,    post_o.title )
    .replace( /_SUBTITLE_/g, post_o.subtitle )
    .replace( /_AUTHOR_/g,   post_o.author )
    .replace( /_ABSTRACT_/g, post_o.abstract )
    .replace( /_DATE_/g,     now_s )
    .replace( /_TODAY_/g,    locale_s )
    if ( !post_o.img_src )
    {
      buffer = buffer
      .replace( /`_GALLERY_`/g, '' )
      .replace( /media:[^\]]*\],/m, '// media:' )
    }
    else
    {
      buffer = buffer
      .replace( /_GALLERY_/g,     'gallery' )
      .replace( /_IMGSRC_/g,      post_o.img_src )
      .replace( /_IMGALT_/g,      post_o.img_alt )
      .replace( /_IMGTITLE_/g,    post_o.img_title )
      .replace( /_IMGABSTRACT_/g, post_o.img_abstract )
    }
    fs.writeFileSync( despath, buffer, write_o )
    console.log( `<${now_s}-${post_o.id}.md> file created` )          
  },
}
