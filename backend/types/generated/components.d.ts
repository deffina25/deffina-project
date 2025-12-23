import type { Schema, Struct } from '@strapi/strapi';

export interface BlogPageBlogPage extends Struct.ComponentSchema {
  collectionName: 'components_blog_page_blog_pages';
  info: {
    displayName: 'blog-page-item';
  };
  attributes: {
    text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<'plugin::tinymce.tinymce'>;
    title: Schema.Attribute.String;
  };
}

export interface BlogPageBlogPageBox1 extends Struct.ComponentSchema {
  collectionName: 'components_blog_page_blog_page_box_1s';
  info: {
    displayName: 'blog-page-box-1';
    icon: 'alien';
  };
  attributes: {
    blog_item: Schema.Attribute.Component<
      'blog-page.blog-page-box-1-item',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface BlogPageBlogPageBox1Item extends Struct.ComponentSchema {
  collectionName: 'components_blog_page_blog_page_box_1_items';
  info: {
    displayName: 'blog-page-box-1-item';
    icon: 'alien';
  };
  attributes: {
    alt: Schema.Attribute.String;
    background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    top_text: Schema.Attribute.String;
  };
}

export interface CasesPageCasesPageBanner extends Struct.ComponentSchema {
  collectionName: 'components_cases_page_cases_page_banners';
  info: {
    displayName: 'cases-page-banner';
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    title_btn: Schema.Attribute.String;
  };
}

export interface CasesPageCasesPageBox1 extends Struct.ComponentSchema {
  collectionName: 'components_cases_page_cases_page_box_1s';
  info: {
    displayName: 'cases-page-box-1';
  };
  attributes: {
    box_1_item: Schema.Attribute.Component<
      'cases-page.cases-page-box-1-item',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface CasesPageCasesPageBox1Item extends Struct.ComponentSchema {
  collectionName: 'components_cases_page_cases_page_box_1_items';
  info: {
    displayName: 'cases-page-box-1-item';
  };
  attributes: {
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CasesPageCasesPageBox2 extends Struct.ComponentSchema {
  collectionName: 'components_cases_page_cases_page_box_2s';
  info: {
    displayName: 'cases-page-box-2';
  };
  attributes: {
    background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    text_url: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface CasesPageCasesPageBox3 extends Struct.ComponentSchema {
  collectionName: 'components_cases_page_cases_page_box_3s';
  info: {
    displayName: 'cases-page-box-3';
  };
  attributes: {
    client_say: Schema.Attribute.Component<
      'module-client-say.client-say',
      false
    >;
  };
}

export interface CasesPageCasesPageImage extends Struct.ComponentSchema {
  collectionName: 'components_cases_page_cases_page_images';
  info: {
    displayName: 'cases-page-image';
  };
  attributes: {
    background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CasesPageCasesPageItem extends Struct.ComponentSchema {
  collectionName: 'components_cases_page_cases_page_items';
  info: {
    displayName: 'cases-item';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<'plugin::tinymce.tinymce'>;
    title: Schema.Attribute.String;
  };
}

export interface CasesPageCasesPageText extends Struct.ComponentSchema {
  collectionName: 'components_cases_page_cases_page_texts';
  info: {
    displayName: 'cases-page-text';
  };
  attributes: {
    h2: Schema.Attribute.String;
    h3: Schema.Attribute.String;
    text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<'plugin::tinymce.tinymce'>;
  };
}

export interface CasesPageCasesPageTitle extends Struct.ComponentSchema {
  collectionName: 'components_cases_page_cases_page_titles';
  info: {
    displayName: 'cases-page-title';
  };
  attributes: {
    path: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomePageColorBox extends Struct.ComponentSchema {
  collectionName: 'components_home_page_color_boxes';
  info: {
    displayName: 'color_box';
  };
  attributes: {
    background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    background_color_visible: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    title: Schema.Attribute.String;
    title_btn: Schema.Attribute.String;
    url_btn: Schema.Attribute.String;
  };
}

export interface HomePageHomePage extends Struct.ComponentSchema {
  collectionName: 'components_home_page_home_pages';
  info: {
    displayName: 'home-page-box-1';
  };
  attributes: {
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
    title_btn: Schema.Attribute.String;
    url_btn: Schema.Attribute.String;
  };
}

export interface HomePageHomePageBox2 extends Struct.ComponentSchema {
  collectionName: 'components_home_page_home_page_box_2s';
  info: {
    displayName: 'home-page-box-2';
  };
  attributes: {
    title: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface HomePageHomePageBox3 extends Struct.ComponentSchema {
  collectionName: 'components_home_page_home_page_box_3s';
  info: {
    displayName: 'home-page-box-3';
  };
  attributes: {
    left_link_text: Schema.Attribute.String;
    left_link_url: Schema.Attribute.String;
    left_stars: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
        },
        number
      >;
    left_title: Schema.Attribute.String;
    right_author: Schema.Attribute.String;
    right_icon_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    right_text: Schema.Attribute.RichText;
  };
}

export interface HomePageHomePageBox4 extends Struct.ComponentSchema {
  collectionName: 'components_home_page_home_page_box_4s';
  info: {
    displayName: 'home-page-box-4';
  };
  attributes: {
    author: Schema.Attribute.String;
    color_icon: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    text: Schema.Attribute.RichText;
  };
}

export interface HomePageHomePageBoxHowWeWork extends Struct.ComponentSchema {
  collectionName: 'components_home_page_home_page_box_how_we_works';
  info: {
    displayName: 'home-page-box-how-we-work';
  };
  attributes: {
    item: Schema.Attribute.Component<
      'home-page.home-page-box-how-we-work-item',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface HomePageHomePageBoxHowWeWorkItem
  extends Struct.ComponentSchema {
  collectionName: 'components_home_page_home_page_box_how_we_work_items';
  info: {
    displayName: 'home-page-box-how-we-work-item';
  };
  attributes: {
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface ModuleClientSayClientSay extends Struct.ComponentSchema {
  collectionName: 'components_module_client_say_client_says';
  info: {
    displayName: 'client-say';
  };
  attributes: {
    addition: Schema.Attribute.String;
    color_addition: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<'plugin::tinymce.tinymce'>;
    title: Schema.Attribute.String;
  };
}

export interface RunningLineRunningLine extends Struct.ComponentSchema {
  collectionName: 'components_running_line_running_lines';
  info: {
    displayName: 'Running-line';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    meta_canonical: Schema.Attribute.String & Schema.Attribute.DefaultTo<'./'>;
    meta_description: Schema.Attribute.String;
    meta_follow: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    meta_index: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    meta_title: Schema.Attribute.String;
  };
}

export interface ServicesPageServicesPage extends Struct.ComponentSchema {
  collectionName: 'components_services_page_services_pages';
  info: {
    displayName: 'services-page-box-1';
  };
  attributes: {
    text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<'plugin::tinymce.tinymce'>;
  };
}

export interface ServicesPageServicesPageBox2 extends Struct.ComponentSchema {
  collectionName: 'components_services_page_services_page_box_2s';
  info: {
    displayName: 'Services-page-box-2';
  };
  attributes: {
    item: Schema.Attribute.Component<
      'services-page.services-page-box-2-item',
      true
    >;
    left_text: Schema.Attribute.RichText;
    left_title: Schema.Attribute.String;
  };
}

export interface ServicesPageServicesPageBox2Item
  extends Struct.ComponentSchema {
  collectionName: 'components_services_page_services_page_box_2_items';
  info: {
    displayName: 'Services-page-box-2-item';
  };
  attributes: {
    stack: Schema.Attribute.Component<
      'services-page.services-page-box-2-item-stack',
      true
    >;
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
    title_icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title_link: Schema.Attribute.String;
    title_stack: Schema.Attribute.String;
    url_link: Schema.Attribute.String;
  };
}

export interface ServicesPageServicesPageBox2ItemStack
  extends Struct.ComponentSchema {
  collectionName: 'components_services_page_services_page_box_2_item_stacks';
  info: {
    displayName: 'services-page-box-2-item-stack';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ServicesPageServicesPageBox3 extends Struct.ComponentSchema {
  collectionName: 'components_services_page_services_page_box_3s';
  info: {
    displayName: 'services-page-box-3';
  };
  attributes: {
    item: Schema.Attribute.Component<
      'services-page.services-page-box-2-item-stack',
      true
    >;
    text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<'plugin::tinymce.tinymce'>;
    title_list: Schema.Attribute.String;
  };
}

export interface ServicesPageServicesPageBox4 extends Struct.ComponentSchema {
  collectionName: 'components_services_page_services_page_box_4s';
  info: {
    displayName: 'services-page-box-4';
  };
  attributes: {
    text: Schema.Attribute.Component<
      'services-page.services-page-box-4-item',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ServicesPageServicesPageBox4Item
  extends Struct.ComponentSchema {
  collectionName: 'components_services_page_services_page_box_4_items';
  info: {
    displayName: 'services-page-box-4-item';
  };
  attributes: {
    text: Schema.Attribute.RichText;
  };
}

export interface SocialNetworkSocialNetwork extends Struct.ComponentSchema {
  collectionName: 'components_social_network_social_networks';
  info: {
    displayName: 'social-network';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog-page.blog-page': BlogPageBlogPage;
      'blog-page.blog-page-box-1': BlogPageBlogPageBox1;
      'blog-page.blog-page-box-1-item': BlogPageBlogPageBox1Item;
      'cases-page.cases-page-banner': CasesPageCasesPageBanner;
      'cases-page.cases-page-box-1': CasesPageCasesPageBox1;
      'cases-page.cases-page-box-1-item': CasesPageCasesPageBox1Item;
      'cases-page.cases-page-box-2': CasesPageCasesPageBox2;
      'cases-page.cases-page-box-3': CasesPageCasesPageBox3;
      'cases-page.cases-page-image': CasesPageCasesPageImage;
      'cases-page.cases-page-item': CasesPageCasesPageItem;
      'cases-page.cases-page-text': CasesPageCasesPageText;
      'cases-page.cases-page-title': CasesPageCasesPageTitle;
      'home-page.color-box': HomePageColorBox;
      'home-page.home-page': HomePageHomePage;
      'home-page.home-page-box-2': HomePageHomePageBox2;
      'home-page.home-page-box-3': HomePageHomePageBox3;
      'home-page.home-page-box-4': HomePageHomePageBox4;
      'home-page.home-page-box-how-we-work': HomePageHomePageBoxHowWeWork;
      'home-page.home-page-box-how-we-work-item': HomePageHomePageBoxHowWeWorkItem;
      'module-client-say.client-say': ModuleClientSayClientSay;
      'running-line.running-line': RunningLineRunningLine;
      'seo.seo': SeoSeo;
      'services-page.services-page': ServicesPageServicesPage;
      'services-page.services-page-box-2': ServicesPageServicesPageBox2;
      'services-page.services-page-box-2-item': ServicesPageServicesPageBox2Item;
      'services-page.services-page-box-2-item-stack': ServicesPageServicesPageBox2ItemStack;
      'services-page.services-page-box-3': ServicesPageServicesPageBox3;
      'services-page.services-page-box-4': ServicesPageServicesPageBox4;
      'services-page.services-page-box-4-item': ServicesPageServicesPageBox4Item;
      'social-network.social-network': SocialNetworkSocialNetwork;
    }
  }
}
