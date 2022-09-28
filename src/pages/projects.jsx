import Image from 'next/future/image'
import Head from 'next/head'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import logoCitesia from '@/images/logos/citesia.png'
import logoMTN from '@/images/logos/mtn.svg'
import logoSplio from '@/images/logos/splio.png'
import logoNym from '@/images/logos/nym.png'
import logoJana from '@/images/logos/jana.png'

const projects = [
  {
    name: 'Citesia',
    description:
      'Refondre une plateforme de crowdfunding immobilier.',
    link: { href: 'https://lasercats.collective.work/case-study/citesia-httpscitesiafr-rm', label: 'collective.work/citesia' },
    logo: logoCitesia,
  },
  {
    name: 'Splio',
    description:
      "Synchroniser les données d'un Saas de marketing automation.",
    link: { href: 'https://lasercats.collective.work/case-study/synchronisation-de-donnees-de-splio-wk', label: 'collective.work/splio' },
    logo: logoSplio,
  },
  {
    name: 'MTN',
    description:
      'Réaliser un dashboard, une webapp et une application ios et android pour un opérateur télécom.',
    link: { href: 'https://lasercats.collective.work/case-study/realisation-dune-application-ios-et-android-xm', label: "collective.work/mtn" },
    logo: logoMTN,
  },
  {
    name: 'NYM Tech',
    description:
      "Créer l'identité graphique d'un projet web3 protégeant la vie privée.",
    link: { href: 'https://lasercats.collective.work/case-study/vers-la-levee-de-fonds-vn', label: 'collective.work/nymtech' },
    logo: logoNym,
  },
  {
    name: 'Jana',
    description:
      "Développer le Channel Manager d'un saas de conciergerie.",
    link: { href: 'https://lasercats.collective.work/case-study/developpement-dun-channel-manager-gr', label: 'collective.work/jana-concierge' },
    logo: logoJana,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projets - Lasercats</title>
        <meta
          name="description"
          content="Les projets emblématiques du collectif, passés et présents."
        />
      </Head>
      <SimpleLayout
        title="Les projets emblématiques du collectif, passés et présents"
        intro="Depuis 2018, nous avons réalisé une palette d'application taillées sur mesure pour les besoins de nos clients. Du marketing automation aux CRM from scratch, du site vitrine aux API multi-plateformes, voicis quelques réalisations qui parlent du travail accompli."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-white dark:ring-0">
                <Image
                  src={project.logo}
                  alt={project.name}
                  className="rounded-full w-11 h-11"
                  
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href} target="_blank" rel="noopener noreferrer">{project.name} </Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 flex mt-6 text-sm font-medium transition text-zinc-400 group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="flex-none w-6 h-6" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
