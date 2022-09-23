import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Lasercats - technologies</title>
        <meta
          name="description"
          content="Les technologies que nous utilisons."
        />
      </Head>
      <SimpleLayout
        title="Les technologies que nous utilisons"
        intro="Impossible de les présenter toutes : chaque projet amène sont lot de nouveauté, chaque client ses spécificités. On s'adapte, à l'écoute des besoins mais nous avons quelques technologies de prédilection.  Dés la phase de devis, nous nous mettrons d'accord avec vous sur les technologies, en prenant le temps de peser le pour et le contre. "
      >
        <div className="space-y-20">
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
              Question de goût et de formation. Si le dev' client nécessite un tuilage fin dans le code, il est possible de prendre un temps en live-coding avec Visual Studio Live Share. 
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              Pour le moment, meilleur outils. Pour un prototypage rapide, des retours clients faciles, trouver le design qui convient n'est pas un problème. 
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Notion">
              Inévitable. Et pour les équipes de dev' avec qui on callabore, cet outils étant répandu, il a toujours été facile de partager des docs de travail. 
            </Tool>
            <Tool title="Click-up">
             On gère nos projets d'ici. Finis les kanbans, Asana ou Trelo... Par ce qu'on privilégie le travail au TJM, on ne peut se passer d'un outils de suivi du temps de travail.
            </Tool>
            <Tool title="Gather">
              Si vous faites vos visios sur skype, essayez Gather...
            </Tool>
          </ToolsSection>
          
          <ToolsSection title="Front-end">
            <Tool title="React">
              Dans l'agence, c'est le framework natif de nos front-end. On l'utilise pour les dashboard/CRM, mais on glisse petit  à petit vers Next.js même pour les webApps.
            </Tool>
            <Tool title="React-Native + X-code">
             Pour les apps mobile, c'est une base de laquelle on n'a pas bougé. Par contre, pour shipper correctement les app sur l'Apple store, il a fallu monter en compétence dans l'environnement dev' Apple. Deux de nos dev' ont leur license chez Apple, des notions de swift et une bonne connaissance de X-Code. Pour assurer la livraison finale de vos apps. 
            </Tool>
            <Tool title="Next-js">
              Certains étaient passé par Gatsby.js. Mais c'est le framework Next.js aui est devenu incontournable chez nous. Il nous a permis d'accélérer certaines de nos apps en scindant les rendus côté client / côté serveur, améliorer considérablement la SEO en servant des pages statiques, optimisé la gestion des images... On explore encore: mettre en cache les données serveurs, sécurisation toujours plus forte des dashboards. Chouchou des frontistes.
            </Tool>
            <Tool title="ERB (Embedded Ruby)">
              Quand la team backend n'a pas envie de s'encombrer d'un front trop lourd et que l'architecture ruby/react n'est pas optimale, du ruby injecté directement dans le html a un rendu final sans concession. 
            </Tool>
            <Tool title="Spip">
              Vous ne trouverez pas de devellopeur PHP ici... mais on a quelque vieilles technos dans nos cartons. SPIP, un système de publication pour l'Internet codé en... français. Un langage qui nous a permis d'intervenir sur deux sites de nos clients sans changer leur habitudes et les faire passer à Worpress. 
            </Tool>
            <Tool title="Prismic">
              En parlant de système de publication ; dans la famille des CMS headless, quand c'est l'architecture jamstack qui l'emporte, on utilise en ce moment Prismic. Léger, simple, son API ne nous a pas encore deçu.  
            </Tool>
          </ToolsSection>
        
          <ToolsSection title="Back-end">
            <Tool title="Ruby-on-Rails">
              It’s not the newest kid on the block but it’s still the fastest.
              The Sublime Text of the application launcher world.
            </Tool>
          </ToolsSection>
          <ToolsSection title="BDD">
            <Tool title="Firebase">
              It’s not the newest kid on the block but it’s still the fastest.
              The Sublime Text of the application launcher world.
            </Tool>
            <Tool title="SupaBase">
              It’s not the newest kid on the block but it’s still the fastest.
              The Sublime Text of the application launcher world.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Automation">
            <Tool title="Zapier">
              It’s not the newest kid on the block but it’s still the fastest.
              The Sublime Text of the application launcher world.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Web 3">
            <Tool title="Remix">
              It’s not the newest kid on the block but it’s still the fastest.
              The Sublime Text of the application launcher world.
            </Tool>
            <Tool title="Hardhat">
              It’s not the newest kid on the block but it’s still the fastest.
              The Sublime Text of the application launcher world.
            </Tool>
            <Tool title="Alchemy">
              It’s not the newest kid on the block but it’s still the fastest.
              The Sublime Text of the application launcher world.
            </Tool>
            <Tool title="IPFS">
              It’s not the newest kid on the block but it’s still the fastest.
              The Sublime Text of the application launcher world.
            </Tool>
          </ToolsSection>

        </div>
      </SimpleLayout>
    </>
  )
}
