import Dropzone from "@/components/dropzone";

export default function Home() {
  return (
    <div className="space-y-8 pb-8">
      <h1 className="text-3xl md:text-5xl font-medium text-center">
        Free unlimited in-browser file converter
      </h1>
      <p className="text-gray-400 text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
        Welcome to Alterigo - Your Ultimate File Conversion Companion.
        Transform, modify, and adapt files effortlessly with our intuitive file
        converter application. Whether you need to switch formats, adjust
        settings, or enhance your documents, Alterigo is here to simplify the
        process. Experience seamless file transformations with Alterigo today.
      </p>
      <Dropzone />
    </div>
  );
}
