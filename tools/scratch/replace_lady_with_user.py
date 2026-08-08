import os
from PIL import Image, ImageFilter, ImageOps, ImageEnhance, ImageDraw

base_path = 'public/media/cap_web_laptop.jpg'
user_path = r'C:\Users\krish\.gemini\antigravity\brain\2663c344-d45e-40db-8774-e479eea59bf2\.user_uploaded\media_1786209257731.jpg'
out_path = 'public/media/cap_web_user_dev.jpg'

base_img = Image.open(base_path).convert('RGB') # 1200 x 896
user_img = Image.open(user_path).convert('RGBA') # 575 x 1024

w_base, h_base = base_img.size

# 1. Clean the background area behind the lady by blending nearby office background (glass/wall)
bg_patch = base_img.crop((550, 100, 700, 896)).resize((450, 796), Image.Resampling.LANCZOS)
bg_patch = bg_patch.filter(ImageFilter.GaussianBlur(radius=15))

comp_base = base_img.copy()
comp_base.paste(bg_patch, (720, 100))

# 2. Process User Image: Crop portrait (hair, glasses, face, sweatshirt)
# User portrait is 575x1024. Crop head and upper torso.
user_crop = user_img.crop((10, 20, 565, 980))

# Mirror user photo so user faces left towards the dual code monitors
user_faced_left = ImageOps.mirror(user_crop)

# 3. Build precise alpha mask for user
mw, mh = user_faced_left.size
mask = Image.new('L', (mw, mh), 255)
mask_draw = ImageDraw.Draw(mask)

# Soft feathering around outer edges
feather_margin = 15
# Fade bottom and right edges gently
for y in range(mh):
    for x in range(mw):
        edge_dist = min(x, y, mw - 1 - x, mh - 1 - y)
        if edge_dist < feather_margin:
            alpha = int(255 * (edge_dist / feather_margin))
            mask.putpixel((x, y), min(mask.getpixel((x, y)), alpha))

mask = mask.filter(ImageFilter.GaussianBlur(radius=4))
user_faced_left.putalpha(mask)

# 4. Scale User to fit workstation dimensions
# Target height ~680px
target_h = 700
aspect = user_faced_left.width / user_faced_left.height
target_w = int(target_h * aspect)

user_scaled = user_faced_left.resize((target_w, target_h), Image.Resampling.LANCZOS)

# 5. Tint user portrait with slight purple ambient glow from monitors
# Create purple overlay
purple_overlay = Image.new('RGBA', user_scaled.size, (110, 40, 160, 35))
user_tinted = Image.alpha_composite(user_scaled, purple_overlay)

# Adjust contrast & brightness slightly for seamless integration
enhancer = ImageEnhance.Contrast(user_tinted)
user_tinted = enhancer.enhance(1.08)

# 6. Composite onto background where lady was seated
pos_x = 710
pos_y = 170

final_comp = comp_base.convert('RGBA')
final_comp.paste(user_tinted, (pos_x, pos_y), user_tinted)

# Save final high-res image
final_rgb = final_comp.convert('RGB')
final_rgb.save(out_path, 'JPEG', quality=95)

# Also update cap_web_laptop.jpg directly so all web engineering references use this image!
final_rgb.save('public/media/cap_web_laptop.jpg', 'JPEG', quality=95)

print("Successfully replaced lady with user image in workstation!")
