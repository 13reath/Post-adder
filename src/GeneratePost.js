export default function generateRandomPost() {
  const names = ["Ogli", "Taga", "Leo", "Alice", "Bob"];
  const emojis = ["😭", "💓", "🔥", "😂", "😎"];
  const texts = [
    "This is an amazing post!",
    "Check out this cool post!",
    "Such a random post, isn't it?",
    "Post it if you like it!",
    "A random post for your feed!",
  ];
  const images = [
    "https://i.pravatar.cc/48",
    "https://i.pravatar.cc/49",
    "https://i.pravatar.cc/50",
  ];

  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  const randomText = texts[Math.floor(Math.random() * texts.length)];
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return {
    name: randomName,
    emoji: randomEmoji,
    text: randomText,
    image: randomImage,
    id: crypto.randomUUID(),
  };
}
