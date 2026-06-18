from rembg import remove
from PIL import Image
import os

print("Loading krishna.png...")
img = Image.open("public/photos/krishna.png")
print(f"Input size: {img.size}, mode: {img.mode}")

print("Removing background (may take 30-60s)...")
result = remove(img)
print(f"Output size: {result.size}, mode: {result.mode}")

# Create transparent version
out_path = "public/photos/krishna_transparent.png"
print(f"Saving to {out_path}...")
result.save(out_path, "PNG")
size = os.path.getsize(out_path)
print(f"Saved: {size} bytes")
print("Done!")
