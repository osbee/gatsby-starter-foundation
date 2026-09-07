/** @jsx jsx */
import { useState } from "react"
import { jsx } from 'theme-ui'
import { graphql } from "gatsby"
import {RiSendPlane2Line} from "react-icons/ri";

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query ContactQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
			html
			excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Contact = ({data}) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const fields = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    }
    setStatus('sending')
    setFeedback('')
    try {
      const res = await fetch('/.netlify/functions/submit-message', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(fields),
      })
      const result = await res.json().catch(() => null)
      if (res.ok && result && result.ok) {
        setStatus('success')
        setFeedback('Got your message. Thanks for reaching out!')
        form.reset()
      } else {
        setStatus('error')
        setFeedback((result && result.error) || 'Unable to send. Please check your connection and try again.')
      }
    } catch (err) {
      setStatus('error')
      setFeedback('Unable to send. Please check your connection and try again.')
    }
  }

  return  (
    <Layout className="contact-page" sx={contactStyles.contactPage}>
      <SEO 
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />
      <div className="wrapper">
        <h1>{frontmatter.title}</h1>
        <div className="description" dangerouslySetInnerHTML={{ __html: html }} />
        <form className="contact-form" method="POST" onSubmit={handleSubmit}>
          <p>
            <label>Name<input type="text" name="name" required /></label>   
          </p>
          <p>
            <label>Email<input type="email" name="email" required /></label>
          </p>
          <p>
            <label>Subject<input type="text" name="subject" required /></label>   
          </p>
          <p>
            <label>Message<textarea name="message" required ></textarea></label>
          </p>
          {feedback && (
            <p role="status" className={status === 'error' ? 'form-status -error' : 'form-status'}>
              {feedback}
            </p>
          )}
          <p className="text-align-right">
            <button className="button" disabled={status === 'sending'}            
            sx={{
              variant: 'links.button'
            }} type="submit">{status === 'sending' ? 'Sending…' : 'Send Message'} <span className="icon -right"><RiSendPlane2Line/></span></button>
          </p>
        </form>
      </div>

    </Layout>
  )
}

export default Contact

const contactStyles = {
  contactPage:{
    "input":{
      border:"6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground"
    },
    "textarea": {
      border:"6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground"
    }
  }
}