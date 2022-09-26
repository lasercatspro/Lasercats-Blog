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


          <ToolsSection title="Front-end">
            <Tool title="React">
              Dans l&apos;agence, c&apos;est le framework natif de nos front-end. On l&apos;utilise pour les dashboard/CRM, mais on glisse petit  à petit vers Next.js même pour les webApps.
            </Tool>
            <Tool title="React-Native + X-code">
              Pour les apps mobile, c&apos;est une base de laquelle on n&apos;a pas bougé. Par contre, pour shipper correctement les app sur l&apos;Apple store, il a fallu monter en compétence dans l&apos;environnement dev&apos; d&apos;Apple. Deux de nos dev&apos; ont leur license chez Apple, des notions de swift et une bonne connaissance de X-Code. Pour assurer la livraison finale de vos apps.
            </Tool>
            <Tool title="Next-js">
              Certains étaient passé par Gatsby.js. Mais c&apos;est le framework Next.js qui est devenu incontournable chez nous. Il nous a permis d&apos;accélérer certaines de nos apps en scindant les rendus côté client / côté serveur, améliorer considérablement la SEO en servant des pages statiques, optimiser la gestion des images... On explore encore le framework : mettre en cache les données serveurs, sécurisation toujours plus forte des dashboards. Chouchou des frontistes.
            </Tool>
            <Tool title="ERB (Embedded Ruby)">
              Quand la team backend n&apos;a pas envie de s&apos;encombrer d&apos;un front trop lourd et que l&apos;architecture ruby/react n&apos;est pas optimale, du ruby injecté directement dans le html a un rendu final sans concession.
            </Tool>
            <Tool title="Spip">
              Vous ne trouverez pas de devellopeur PHP ici... mais on a quelque vieilles technos dans nos cartons. SPIP, un système de publication pour l&apos;Internet codé en... français. Un langage qui nous a permis d&apos;intervenir sur deux sites de nos clients sans changer leur habitudes et en évitant de les faire passer à Worpress.
            </Tool>
            <Tool title="Prismic">
              En parlant de système de publication ; dans la famille des CMS headless, quand c&apos;est l&apos;architecture jamstack qui l&apos;emporte, on utilise en ce moment Prismic. UI légère, simple d&apos;utilisation et son API ne nous a pas encore deçu.
            </Tool>
          </ToolsSection>

          <ToolsSection title="Back-end">
            <Tool title="Ruby-on-Rails">
              It’s not the newest kid on the block but it’s still the fastest.
              The Sublime Text of the application launcher world.
            </Tool>
          </ToolsSection>
          {/* <ToolsSection title="BDD">
            <Tool title="Firebase">
              It’s not the newest kid on the block but it’s still the fastest.
              The Sublime Text of the application launcher world.
            </Tool>
            <Tool title="SupaBase">
              It’s not the newest kid on the block but it’s still the fastest.
              The Sublime Text of the application launcher world.
            </Tool>
          </ToolsSection> */}
          <ToolsSection title="Automation">
            <Tool title="Zapier">
              Il y a des tâches d&apos;automation qui ne méritent pas d&apos;être codées et recodées. Quand les API ou la gestion des events le permt, et d&apos;autant plus quand l&apos;intégration est gérée par Zapier, on fait gagner du temps et de l&apos;argent à tout le monde en se servant de Zapier.  
            </Tool>
          </ToolsSection>
          <ToolsSection title="Analytics">
            <Tool title="Plausible">
            Simple, l&apos;interface est minimale, d&apos;un coup d’œil on comprend les données essentiels, celles qui nous intéressent.
Fini l&apos;enfer des onglets et sous-onglets de Google Analytics 🙀, on n&apos;est plus noyé dans les informations
            </Tool>
            <Tool title="GoogleAnalytics">
             Mais quand il faut alimenter un dashboard fait maison pour suivre finement l&apos;activité multiplateforme (IOS Android et webapp) de plusieurs milliers d&apos;utilisateurs pour in fine orienter le marketing d&apos;une entreprise... Il faut sortir la grosse artillerie. Et nous ne sommes pas arrivé au bout de ce que peut Google en terme de tracking! 
            </Tool>
          </ToolsSection>

          <ToolsSection title="Web 3">
            <Tool title="Remix">
              Au début, on ne pensait pas devoir coder du solidity. Mais travailler sur un smart-contract bugué nous à poussé à nous y mettre, et remix a été notre bac à sable! C&apos;est ici qu&apos;on vérifie ce qu&apos;on fait et la solidité des smart-contracts qu&apos;on nous soumet. 
            </Tool>
            <Tool title="Hardhat">
              Pour le moment, en local, on utilise Hardat. Selon les projets qui viennent, on irait bien explorer Ganache/Truffle. A l&apos;occasion donc. Mais la doc de Hardat, ultra claire, avait fini de nous decider.            </Tool>
            <Tool title="IPFS">
             Nouvelle manière d&apos;héberger et de distribuer de la data, on a fait nos premier pas avec IPFS sur un projet perso. En attente de projets costauds pour aller plus loin!
            </Tool>
          </ToolsSection>

          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
              Question de goût et de formation. Si le dev&apos; client nécessite un tuilage fin dans le code, il est possible de prendre un temps en live-coding avec Visual Studio Live Share.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              Pour le moment, meilleur outils. Pour un prototypage rapide, des retours clients faciles, trouver le design qui convient n&apos;est pas un problème.
            </Tool>
          </ToolsSection>

          <ToolsSection title="Productivity">
            <Tool title="Notion">
              Inévitable.
            </Tool>
            <Tool title="Click-up">
              On gère nos projets d&apos;ici. Finis les kanbans, Asana ou Trelo... Par ce qu&apos;on privilégie le travail au TJM, on ne peut se passer d'un outils de suivi du temps de travail.
            </Tool>
            <Tool title="Gather">
              Si vous faites encore vos visios sur skype, essayez Gather...
            </Tool>
          </ToolsSection>




        </div>
      </SimpleLayout>
    </>
  )
}
