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
          <h1 className="about__title">About me</h1>
          <img src="thdy.jpg">
          <div className="about__body">
            <p>
              ・thdy (@thdy5, <a href="https://twitter.com/thdy5">Twitter</a>)
              ・加来 慎太郎 (Shintaro Kaku, <a href="https://www.linkedin.com/in/shintaro-kaku-975b59a8/">LinkedIn</a>)
              ・広島在住のリモートワーカー
              ・Japan Okta User Group 運営 (<a href="https://okta.connpass.com/"></a>JOUG)
              ・業務パッケージの保守開発とサポートエンジニアを経験した後に、国内外にグループ会社を持つホールディングカンパニーの情報システム部にてグループ全体のIT統制や各種ソリューションの導入、運用に従事。2020年11月よりヘイ株式会社、コーポレートエンジニア。
              ・<a href="https://zenn.dev/thdy/">Zenn.dev</a>
              ・<a href="https://note.com/thdy/">note</a>
              ・<a href="https://thdy.hatenablog.jp/">hatena blog</a>
              ・<a href="https://qiita.com/THDY/">Qiita</a>
              ・<a href="https://lapras.com/public/MJDDR5B">LAPRAS</a>
              ・ご意見・ご質問、お仕事のご相談・ご依頼はTwitterの <a href="https://twitter.com/thdy5">@thdy5</a> 宛にDMをお送りください。
            </p>
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
