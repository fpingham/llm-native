import os

from PIL import Image


def resize_logo(input_path, output_path, size=(60, 60)):
    # Open the original image
    with Image.open(input_path) as img:
        # Convert to RGBA if not already
        img = img.convert("RGBA")
        # Resize with high quality
        img_resized = img.resize(size, Image.Resampling.LANCZOS)
        # Save the resized image
        img_resized.save(output_path, "PNG", quality=95)


if __name__ == "__main__":
    # Input and output paths
    input_logo = "logo-small.png"
    output_logo = "logo-tiny.png"

    # Create tiny version (8x8 pixels)
    resize_logo(input_logo, output_logo, (60, 60))
    print(f"Created tiny logo: {output_logo}")
