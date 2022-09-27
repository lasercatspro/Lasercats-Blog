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
        intro="Impossible de les présenter toutes : chaque projet amène sont lot de nouveauté, chaque client ses spécificités. Voici quand même une présentation de nos technologies de prédilection.  Dés la phase de devis, nous nous mettrons d'accord avec vous sur les technologies, en prenant le temps de peser le pour et le contre. "
      >
        <div className="space-y-20">


          <ToolsSection title="Front-end">
            <Tool title="React">
              Dans l&apos;agence, c&apos;est le framework natif de nos front-end. On l&apos;utilise pour les dashboard/CRM, et désormais presque toujours avec le framework NextJS.
            </Tool>
            <Tool title="React-Native + X-code">
              Pour les apps mobile, c&apos;est une base de laquelle on n&apos;a pas bougé. Par contre, pour shipper correctement les app sur l&apos;Apple store, il a fallu monter en compétence dans l&apos;environnement dev&apos; d&apos;Apple. Deux de nos dev&apos; ont leur license chez Apple, des notions de swift et une bonne connaissance de X-Code. Pour assurer la livraison finale de vos apps.
            </Tool>
            <Tool title="NextJS">
              Certains étaient passés par Gatsby.js. Mais c&apos;est le framework NextJS qui est devenu incontournable chez nous. Il nous a permis d&apos;accélérer certaines de nos apps en scindant les rendus côté client / côté serveur, améliorer considérablement la SEO en servant des pages statiques, optimiser la gestion des images. Chouchou des frontistes.
            </Tool>
            <Tool title="ERB (Embedded Ruby)">
              Quand la team backend n&apos;a pas envie de s&apos;encombrer d&apos;un front trop lourd et que l&apos;architecture ruby/react n&apos;est pas optimale, du ruby injecté directement dans le html a un rendu final sans concession.
            </Tool>
            <Tool title="Spip">
              Vous ne trouverez pas de devellopeur PHP ici... mais on a quelque vieilles technos dans nos cartons. SPIP, un système de publication pour l&apos;Internet codé en... français. Un langage qui nous a permis d&apos;intervenir sur deux sites de nos clients sans changer leur habitudes et en évitant de les faire passer à Wordpress.
            </Tool>
            <Tool title="Prismic">
              En parlant de système de publication ; dans la famille des CMS headless, quand c&apos;est l&apos;architecture jamstack qui l&apos;emporte, on utilise en ce moment Prismic. UI légère, simple d&apos;utilisation et son API ne nous a pas encore deçu.
            </Tool>
          </ToolsSection>

          <ToolsSection title="Back-end">
            <Tool title="Ruby-on-Rails">
              Toujours là, l&apos;indétronabe frameworks nous sert pour consrtuire nos backends. Base de données Postgresql, API maison (rest ou graphql), logique métier, connexion à des API tierce et traitement des données, voilà tous ce qu&apos;il nous permet d&apos;accomplir.
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
              Du développement en local jusqu&apos;au déploiement final, Hardhat
              est un outil extrêmement flexible et puissant pour développer des smartcontracts.
            </Tool>
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
              Pour un prototypage rapide, des maquettes dynamiques, des mockups au pixel près et des retours clients faciles, Figma est l&apos;outil qui convien.
            </Tool>
          </ToolsSection>

          <ToolsSection title="Productivity">
            <Tool title="Notion">
              Inévitable.
            </Tool>
            <Tool title="Click-up">
              On gère nos projets d&apos;ici. Finis les kanbans, Asana ou Trelo... Par ce qu&apos;on privilégie le travail au TJM, on ne peut se passer d&apos;un outils de suivi du temps de travail.
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
