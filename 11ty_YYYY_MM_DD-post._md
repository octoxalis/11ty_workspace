---js
/**
 * Markdown prototype file to create a new post
 * This file is first duplicated and
 * _PLACE_HOLDERS_ are then replaced by the createPost JS function
 */
{
  layout:    `layouts/_LAYOUT_/item.njk`,
  permalink: `_PLINK_/items/_DATE_-_ID_.html`,
  tags:      [ `_TAGS_` ],
  areas:     [ `menu` ,`home` ,`_GALLERY_` ],
  active:    `text`,
  
  image:     `_IMG_`,
  title:     `_TITLE_`,
  subtitle:  `_SUBTITLE_`,
  author:    `_AUTHOR_`,
  date:      `_DATE_`,
  hdates:    [ `_TODAY_` ],
  abstract:  `_ABSTRACT_`,
  comments:  true,

  media:   // illustrations
  [
    {
      src:      `_IMGSRC_`,
      alt:      `_IMGALT_`,
      title:    `_IMGTITLE_`,
      abstract: `_IMGABSTRACT_`,
    },
  ],

}
---
[comment]: # (======== Article ========)

{% articleFolder %}

{% contentFolder 1, "_TITLE_" %}

{% endcontentFolder %}

{% endarticleFolder %}

[comment]: # (======== Footnotes ========)

{% contentFolder 201, "NOTES | VERSIONS" %}
{% footerNote %}
{% endfooterNote %}

[comment]: # (======== Historique ========)

### Versions { .ca_version_title }

1. **_TODAY_**  
  __INNER_CONTENT__{ .ca_version_entry }  
{ .ca_version_list }

{% endcontentFolder %}
