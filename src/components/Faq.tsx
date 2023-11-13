
import Markdown from "react-markdown";
import faqData from "./data.ts";
import remarkGfm from "remark-gfm";
import styles from "./styles.module.css";
import "./markdown.css";

const FAQSection = () => {
  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqData.map((faqItem, index) => (
          <li key={index}>
            <h3>{faqItem.question}</h3>
            <Markdown
              components={{
                table: (props) => (
                  <table className={styles["markdown-table"]} {...props} />
                ),
              }}
              remarkPlugins={[remarkGfm]}
            >
              {faqItem.answer}
            </Markdown>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQSection;
