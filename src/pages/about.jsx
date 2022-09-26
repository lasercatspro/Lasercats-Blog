import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/logo.svg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>L'agence - Lasercats</title>
        <meta
          name="description"
          content="Lasercats - Agence de dévelloppeurs web, web3 et mobile"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl object-cover dark:invert"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Lasercats : une petite agence qui a pris ses marques
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Depuis 2018, la petite équipe des Lasercats s&apos;est monté en s&apos;appuyant sur deux technologies: Ruby et React. L&apos;expérience métier n&apos;était pas la même : dix ans au compteur pour notre CTO, une année de formation pour les autres. Coder ensemble a rapidement été une partie de plaisir et de l&apos;apprentissage continu { }
                <Link
        href="/uses"
        className="underline"
      >
        (voir section Technos)
      </Link>
     . L&apos;amitié est un ciment entre nous qui nous permet de sortir de situations délicate... quand error 404 nous ronge les nerfs depuis plusieurs heures par exemple !
              </p>
              <p>
                Après avoir occupé l&apos;appartement le plus grand à notre disposition, testé les limites anthropologiques de la visio, puis occupé plusieurs open-space, l&apos;agence a désormais ses bureaux à Rennes.
                C&apos;est au 
                <br/> <br/> <p className="text-center font-bold">
                  2 avenue Jean Janvier<br/>
                35 000 Rennes
                  </p>
              </p>
              <p>
                A ce jour, nous sommes 8 dev&apos;. 6 en Bretagne, 2 autres à Bruxelle et Lyon. Petit à petit, des spécialités ont vu le jour, ce qui nous permet de répondre à une grande palette de projet et surtout d&apos;assurer une bonne review du code en interne.
                Nous travaillons au maximum en binôme : c&apos;est une manière pour nous de forcer une bonne lisibilité de notre code, de corriger les petites inattentions, d&apos;avoir un œil extérieur quand des difficultés voient le jour et de ne surtout pas rester bloquer.
              </p>
              <p>
                Nous privilégions le mode régie avec nos clients (TJM 550e). Mais certains projets nécessitent d&apos;autres types de prestation. Ici, nous travaillons aussi sur ce qui nous plaît. Si vous venez à nous avec un projet qui a du sens, il est toujours temps de discuter.
              </p>


            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/LasercatsDev/" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              {/* <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink> */}
              <SocialLink href="https://github.com/lasercatspro" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://fr.linkedin.com/company/lasercats" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:contact@lasercats.fr
                "
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                contact@lasercats.fr

              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
