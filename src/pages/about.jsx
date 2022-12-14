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
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
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
        <title>Collectif - Lasercats</title>
        <meta
          name="description"
          content="Lasercats - Collectif de developpement web, web3 et mobile"
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
                className="object-cover aspect-square rotate-3 rounded-2xl dark:invert"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Nous sommes les Lasercats, nous somme huit, nous d??veloppons vos applications
            </h1>
            <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
              <p>
                En 2018, l&apos;??quipe des Lasercats s&apos;est mont??e en s&apos;appuyant sur deux technologies: Ruby et React. Depuis nous sommes pass??s de trois ?? huit d??veloppeurs. Nous sommes bas??s en Bretagne, mais aussi ?? Bruxelles et ?? Lyon. Nos bureaux sont ?? Rennes au 2 avenue Jean Janvier.
              </p>
              <p>
                Coder ensemble a rapidement ??t?? une partie de plaisir et d&apos;apprentissage mutuel. L&apos;amiti?? est un ciment entre nous et nous permet de sortir de situations d??licates... quand <span className='italic' >error 404</span> nous ronge les nerfs depuis plusieurs heures par exemple??! </p><p>Nous privil??gions le travail en bin??me. C&apos;est une mani??re pour nous de forcer une bonne lisibilit?? de notre code, de nous corriger mutuellement, d&apos;avoir un ??il ext??rieur quand des difficult??s voient le jour et de ne surtout pas rester bloquer.</p>
              {/* <p>
                Apr??s avoir occup?? l&apos;appartement le plus grand ?? notre disposition, test?? les limites anthropologiques de la visio, puis occup?? plusieurs open-space, le collectif a d??sormais ses bureaux ?? Rennes.
                C&apos;est au
                <span className="font-bold ">
                  {" "}2 avenue Jean Janvier,  35 000 Rennes

                </span>
              </p> */}
              <p>
                De la maquette au d??ploiement en production, notre ??quipe est{" "}
                <Link
                  href="/technos"
                  className='underline'
                >
                  <a>
                    compl??mentaire et experte sur tous les aspects
                  </a>
                </Link>
                . Nous pouvons ainsi r??pondre ??{" "}
                <Link
                  href="/projects"
                  className='underline'
                >
                  <a>
                    une grande palette de projets
                  </a>
                </Link>
                .
              </p>

              <p>
                Nos sp??cialit??s:
              </p>
              <ul className='list-disc list-inside'>
                <li>
                  <span className='font-bold'>API&#xA0;
                  </span>: Creation d&apos;API REST ou Graphql avec Ruby on Rails. Connexion et synchronisation d&apos;API tierces (facebook, twitter, linkedin, mangopay, hubspot, zapier???)
                </li>
                <li>
                  <span className='font-bold'>BACKEND&#xA0;
                  </span>: Architecture des bases de donn??es, des relations entre les mod??les et manipulation des donn??es du c??t?? serveur. Souvent avec Ruby on Rails et des bases Posgreql, mais aussi avec Firebase (pour les apps mobiles) ou d&apos;autres outils dans le cloud
                </li>
                <li>
                  <span className='font-bold'>DASHBOARDS&#xA0;
                  </span>: Conception des maquettes ?? l&apos;aide Figma, de tests utilisateurs et des bonnes r??gles d&apos;UX/UI. Int??gration en front avec ReactJS/NextJS/Typescript.
                </li>
                <li>
                  <span className='font-bold'>MOBILE&#xA0;
                  </span>: Conception et d??veloppement d???applications mobiles avec ReactNative. D??ploiement sur le PlayStore et l&apos;AppleStore (Xcode).
                </li>
                <li>
                  <span className='font-bold'>WEB3&#xA0;
                  </span>: Gr??ce aux technologies web3, nous connectons les applications ?? la blockchain, aux smartcontracts, et aux wallets des utilisateurs. Et (pour des side-projects) nous exp??rimentons le d??veloppement en solidity.
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/LasercatsDev/" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://fr.linkedin.com/company/lasercats" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:contact@lasercats.fr
                "
                icon={MailIcon}
                className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
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
