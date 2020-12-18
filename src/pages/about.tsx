import { NextPage } from "next";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { LinkBackHome } from "@src/components/LinkBackHome";
import { PageSEO } from "@src/components/PageSEO";

const Page: NextPage = () => {
  return (
    <>
      <PageSEO title="About" path="/about" />
      <ContentWrapper>
        <section className="about">
          <h1 className="about__title">About</h1>
          <img src="http://thdy.jp/avatars/thdy.jpg" width="300"></img>
          <div className="about__body">
            <ul>
            <br></br>
            <li>・thdy (@thdy5, <a href="https://twitter.com/thdy5">Twitter</a>)</li>
            <li>・加来 慎太郎 (Shintaro Kaku, <a href="https://www.linkedin.com/in/shintaro-kaku-975b59a8/">LinkedIn</a>)</li>
            <li>・広島在住のリモートワーカー</li>
            <li>・Japan Okta User Group 運営 (<a href="https://okta.connpass.com/"></a>JOUG)</li>
            <li>・プロダクト開発、サポートエンジニアを経て情シス/コーポレートエンジニアとして活動中</li>
            <li>・<a href="https://zenn.dev/thdy/">Zenn.dev</a></li>
            <li>・<a href="https://note.com/thdy/">note</a></li>
            <li>・<a href="https://thdy.hatenablog.jp/">hatena blog</a></li>
            <li>・<a href="https://qiita.com/THDY/">Qiita</a></li>
            <li>・<a href="https://lapras.com/public/MJDDR5B">LAPRAS</a></li>
            <li>・ご意見・ご質問、お仕事のご相談・ご依頼はTwitterの <a href="https://twitter.com/thdy5">@thdy5</a> 宛にDMをお送りください。</li>
            </ul>
          </div>
          <div className="about__actions">
            <LinkBackHome />
          </div>
        </section>
      </ContentWrapper>
    </>
  );
};

export default Page;
