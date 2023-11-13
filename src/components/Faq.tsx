
import Markdown from "react-markdown";
import faqData from "./data.ts";
import remarkGfm from "remark-gfm";
import styles from "./styles.modules.css";
import "./markdown.css";

const FAQSection = () => {
  return (
    <div className="w-[100%]">
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqData.map((faqItem: faqData, index: number) => (
          <li key={index}>
            <h3>{faqItem.question}</h3>
            <Markdown
              components={{
                table: (props: React.HTMLProps<HTMLTableElement>) => (
                  <table className={(styles as any)["markdown-table"]} {...props} />
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
