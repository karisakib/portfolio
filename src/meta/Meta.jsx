import { Helmet } from "react-helmet-async"
// import content from "../content/info.json"

const Meta = () => {
  return (
      <Helmet>
      <title>Kari Sakib | QA Engineer | Software Developer</title>
      <link rel="canonical" href="/" />
      <meta name="description" content="Kari Sakib Portfolio" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="cyan" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
      <meta property="og:site_name" content="Kari Sakib" />
      <meta property="og:title" content="Kari Sakib | QA Engineer | Software Developer" />
      <meta property="og:type" content="website" />
      {/* <meta property="og:image" content="" /> */}
      <meta property="og:url" content="http://karisakib.com" />
      <meta property="og:description" content="Kari Sakib Portfolio" />
      <meta property="og:locale" content="en_US" />
      {/* <meta property="og:image" content="https://res.cloudinary.com/fay/image/upload/w_1280,h_640,c_fill,q_auto,f_auto/w_860,c_fit,co_rgb:232129,g_west,x_80,y_-60,l_text:Source%20Sans%20Pro_70_line_spacing_-10_semibold:Anyone%20Can%20Map!%20Inspiration%20and%20an%20introduction%20to%20the%20world%20of%20mapping/blog-social-card-1.1" />
      <meta property="og:image:secure_url" content="https://res.cloudinary.com/fay/image/upload/w_1280,h_640,c_fill,q_auto,f_auto/w_860,c_fit,co_rgb:232129,g_west,x_80,y_-60,l_text:Source%20Sans%20Pro_70_line_spacing_-10_semibold:Anyone%20Can%20Map!%20Inspiration%20and%20an%20introduction%20to%20the%20world%20of%20mapping/blog-social-card-1.1" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="640" />
      <meta property="article:publisher" content="https://www.colbyfayock.com" />
      <meta property="article:section" content="Coding" />
      <meta property="article:tag" content="Coding" /> */}
     </Helmet>
  )
}

export default Meta