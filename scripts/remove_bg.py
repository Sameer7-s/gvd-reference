from rembg import remove
from PIL import Image
import os

print("Loading image...")
img = Image.open("public/photos/deity_new.png")
print(f"Input size: {img.size}, mode: {img.mode}")

print("Removing background (may take 30-60s)...")
result = remove(img)
print(f"Output size: {result.size}, mode: {result.mode}")

print("Saving as deity.png...")
result.save("public/photos/deity.png", "PNG")
size = os.path.getsize("public/photos/deity.png")
print(f"Saved: {size} bytes")
print("Done!")
