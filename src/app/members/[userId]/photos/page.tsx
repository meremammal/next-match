import { getMemberPhotosByUserId } from "@/app/actions/memberActions";
import { CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/react";

export default async function PhotosPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const photos = getMemberPhotosByUserId(userId);
  return (
    <>
      <CardHeader className="text-2xl font-semibold text-secondary">
        Photos
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          {photos &&
            (await photos).map((photo) => (
              <div key={photo.id}>
                <Image width={300} height={300} src={photo.url} alt="Image of member" className="object-cover aspect-square"></Image>
              </div>
            ))}
        </div>
      </CardBody>
    </>
  );
}
