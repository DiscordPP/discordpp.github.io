import React, { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classNames from "classnames";
import Caret from "./icons/Caret";
import CaretFill from "./icons/CaretFill";
import useToggle from "../hooks/useToggle";
import Discord from "./icons/Discord";
import ThemeSwitcher from "./ThemeSwitcher";

interface mi {
	[key: string]: miCategory;
}

interface miLink {
	name: string;
	title: string;
	sublinks: string[];
	priority: number;
}

interface miCategory {
	name: string;
	items: miLink[];
}

import menuItems from "../vals/menuItems";

interface MenuSelectionProps {
	title?: string;
	children: React.ReactNode;
	className?: string;
}

function NavigationSection({ title, className, children }: MenuSelectionProps) {
	const classes = classNames("mb-6", className);

	return (
		<section className={classes}>
			{title ? (
				<h3 className="mb-2 ml-2 text-black dark:text-white font-whitney-bold text-xs uppercase">{title}</h3>
			) : null}
			{children}
		</section>
	);
}

interface NavigationLinkProps {
	href: string;
	subLinks?: React.ReactNode;
	className?: string;
	children: React.ReactNode;
}

function NavigationLink({ href, subLinks, className, children }: NavigationLinkProps) {
	const router = useRouter();
	const { value: isOpen, toggle } = useToggle(router.pathname === href);

	// TODO: We currently have a bunch of listeners being added here - can this be improved?
	useEffect(() => {
		const handler = (url: string) => {
			// debugger;
			if (url.endsWith(href) && !isOpen) {
				toggle();
			}
		};

		router.events.on("routeChangeComplete", handler);
		return () => router.events.off("routeChangeComplete", handler);
	});

	const classes = classNames("flex items-center font-whitney rounded-md", className, {
		"bg-brand-blurple text-white": router.pathname === href,
		"text-theme-light-sidebar-text dark:text-theme-dark-sidebar-text hover:bg-theme-light-sidebar-hover hover:text-theme-light-sidebar-hover-text dark:hover:bg-theme-dark-sidebar-hover dark:hover:text-white":
			router.pathname !== href,
	});

	const caretClasses = classNames("w-4 h-4", {
		"rotate-90": isOpen,
	});

	const linkClasses = classNames("group flex items-center px-2 py-1 w-full font-medium", {
		"ml-6": subLinks == null,
	});

	return (
		<Fragment>
			<span className={classes}>
				{subLinks != null && (
					<button onClick={toggle} className="pl-2">
						<CaretFill className={caretClasses} />
					</button>
				)}
				<Link href={href}>
					<a className={linkClasses}>{children}</a>
				</Link>
			</span>
			{isOpen && subLinks != null ? subLinks : null}
		</Fragment>
	);
}

interface NavigationSubLinkProps {
	href: string;
	children: React.ReactNode;
}

function NavigationSubLink({ href, children }: NavigationSubLinkProps) {
	const router = useRouter();
	const classes = classNames("group flex items-center ml-6 px-2 py-1 w-full text-sm font-medium rounded-md", {
		"text-dark dark:text-white": router.asPath === href,
		"text-theme-light-sidebar-text hover:text-theme-light-sidebar-hover-text dark:hover:text-white":
			router.asPath !== href,
	});

	return (
		<span className="relative flex items-center ml-4">
			<Link href={href}>
				<a className={classes}>
					{router.asPath === href ? <Caret className="absolute -ml-4 w-2 h-2" /> : null}
					{children}
				</a>
			</Link>
		</span>
	);
}

export default function Navigation() {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	// @ts-expect-error
	const parsed: mi = menuItems;
	const insert: JSX.Element[] = [];
	["documentation", "setup", "usage", "plugins"].forEach((k: string) => {
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		if (parsed[k] === undefined) {
			return;
		}
		const links: JSX.Element[] = [];
		parsed[k].items
			.sort((a, b) => b.priority - a.priority)
			.forEach((link) => {
				const href = `/${k === "documentation" ? "" : `${k}/`}${link.name === "index" ? "" : link.name}`;
				const sublinks: JSX.Element[] = [];
				link.sublinks.forEach((sublink) => {
					sublinks.push(
						<NavigationSubLink href={`${href}#${sublink.toLowerCase().replaceAll(" ", "-")}`} key={sublink}>
							{sublink}
						</NavigationSubLink>
					);
				});
				links.push(
					<NavigationLink
						href={href}
						key={link.name.slice(0, -4)}
						subLinks={
							sublinks.length > 0 &&
							link.name !== "index" &&
							link.name !== "changelog" &&
							link.name !== "typography" ? (
								<Fragment>{sublinks}</Fragment>
							) : undefined
						}
					>
						{link.title}
					</NavigationLink>
				);
			});
		insert.push(
			<NavigationSection title={parsed[k].name} key={k}>
				{links}
			</NavigationSection>
		);
	});
	/* parsed.map((category: { name: string | undefined; }) => <NavigationSection
    title={category.name}><NavigationLink href="/">Intro</NavigationLink></NavigationSection>)*/
	return (
		<nav className="flex-1 self-stretch mt-5 px-6">
			<div className="hidden items-center -mt-4 mb-10 md:flex">
				<a href="https://discord.com/developers/applications" className="hidden md:block">
					<Discord className="w-9/12 text-black dark:text-white" />
				</a>
				<ThemeSwitcher />
			</div>

			<NavigationSection>
				<NavigationLink href="https://theundarkpixel.com/" className="text-lg">
					Back to The Undark Pixel
				</NavigationLink>
				<NavigationLink href="https://discord.gg/VHAyrvspCx" className="text-lg">
					Join our Discord!
				</NavigationLink>
				<NavigationLink href="https://github.com/DiscordPP" className="text-lg">
					Check out our source code
				</NavigationLink>
				<NavigationLink href="https://discord.com/developers/docs" className="text-lg">
					Official Discord API Docs
				</NavigationLink>
			</NavigationSection>

			{insert}
		</nav>
	);
}
