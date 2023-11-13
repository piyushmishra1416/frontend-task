
import Markdown from "react-markdown";
import faqData from "./data.ts";
import remarkGfm from "remark-gfm";
import styles from "./styles.modules.css";
import "./markdown.css";
import { Box } from "@mui/material";
import rehypeRaw from "rehype-raw";

const FAQSection = () => {
  return (
    <Box sx={{height: {xs: '50vh', md: 'auto'}, overflow:'scroll', width: '100%'}}>
      <h2 className="font-bold text-4xl mb-6">Frequently Asked Questions</h2>
      <ul>
        {faqData.map((faqItem: faqData, index: number) => (
          <li key={index}>
            <h3 className="font-bold text-[20px] mb-2" >{faqItem.question}</h3>
            <Markdown
              components={{
                table: (props: React.HTMLProps<HTMLTableElement>) => (
                  <table className={(styles as any)["markdown-table"]} {...props} />
                ),
              }}
              className=" mb-4"
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}

            >
              {faqItem.answer}
            </Markdown>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default FAQSection;
