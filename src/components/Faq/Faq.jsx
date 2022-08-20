import * as React from 'react';
import "./Faq.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ExpandMore } from '@mui/icons-material';

const Faq = () => {
  return (
    <div className="faq-accordion-container">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="first-accordion-summary"
        >
          <Typography>How much do you charge for web design?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our website design packages can be tailored to meet the needs of small and large businesses alike. If you’re not sure which package to choose or need a custom quote, please get in touch.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do you you provide after support services?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, we provide free website maintenance for 1 month after the project is complete. This includes Adding, Deleting, and Modifying text only.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Do i need to host my website with you?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            No, you do not need to host your website with us. We are open to designing a website from scratch or redesigning an existing website.
            </Typography>
       </AccordionDetails>     
      </Accordion>
      <Accordion>
        <AccordionSummary 
        expandIcon={<ExpandMore />}
        aria-controls="panel4a-content"
        id="panel4a-header"
        className="last-accordion-summary">
            Are your websites seo friendly?
        </AccordionSummary>
        <AccordionDetails className="last-accordion-detail">
            <Typography>
            Our websites are technically-sound, responsive, and have a great user experience. They are SEO friendly and will include SEO tools implementation. However, for advanced SEO services such as keyword research, content optimization, and others - please sign up for our SEO services.
            </Typography>
        </AccordionDetails>

      </Accordion>
    </div>
  );
}


export default Faq;