"use client";
import { signOutUser } from "@/app/actions/authActions";
import { transformImageUrl } from '@/lib/util';
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@heroui/react";
import { Member } from '@prisma/client';
import Link from "next/link";

type Props = {
  member: Member;
};


export default function UserMenu({ member }: Props) {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name={member?.name || "user avatar"}
          size="sm"
          src={transformImageUrl(member?.image) || "/images/user.png"}
        />
      </DropdownTrigger>
      <DropdownMenu variant="flat" aria-label="User actions menu">
        <DropdownSection showDivider>
          <DropdownItem
            key="signInAs"
            isReadOnly
            as="span"
            className="h-14 flex flex-row"
            aria-label="username"
          >
            Signed in as {member?.name}
          </DropdownItem>
        </DropdownSection>
        <DropdownItem key="editProfile" as={Link} href="/members/edit">
          Edit profile
        </DropdownItem>
        <DropdownItem
          key="logOut"
          color="danger"
          onPress={async () => {
            signOutUser();
          }}
        >
          Log out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
