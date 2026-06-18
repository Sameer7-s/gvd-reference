from PIL import Image

img = Image.open("public/photos/krishna.png")
width, height = img.size
print(f"Original size: {width}x{height}")

# Option 1: Crop from x=500 to x=1536 (deities only)
crop1 = img.crop((500, 0, 1536, height))
crop1.save("public/photos/krishna_crop1.png")
print("Saved krishna_crop1.png:", crop1.size)

# Option 2: Crop from x=550 to x=1500 (tight deities)
crop2 = img.crop((550, 0, 1500, height))
crop2.save("public/photos/krishna_crop2.png")
print("Saved krishna_crop2.png:", crop2.size)

# Option 3: Crop from x=450 to x=1450
crop3 = img.crop((450, 0, 1450, height))
crop3.save("public/photos/krishna_crop3.png")
print("Saved krishna_crop3.png:", crop3.size)
