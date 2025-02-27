## Overview
You will lean here on how to properly add an image to a WPF project and use it within a `Button` control. The example below demonstrates how to include an image inside a `Button` using a `StackPanel` layout.

## XAML Code Example
```xml
<Button x:Name="btnlogin" Click="btnlogin_Click" Width="100">
    <Button.Content>
        <StackPanel Orientation="Horizontal">
            <Image Source="/Image/email.png" Width="50" Height="30" />
            <TextBlock Text="Email" Margin="0,5,0,0" />
        </StackPanel>
    </Button.Content>
</Button>
```

## Adding an Image to the Project
1. Place the image (`email.png`) inside a folder named `Image` within your project.
2. Right-click the `email.png` file in **Solution Explorer**.
3. Select **Properties**.
4. Set the following properties:
   - **Build Action**: `Content`
   - **Copy to Output Directory**: `Copy always`

## Why Set Build Action to Content?
Setting the **Build Action** to `Content` ensures that the image is not compiled into the assembly but is instead included as a separate file. This allows WPF to reference it correctly using a relative path.

## Why Set Copy to Output Directory to Always?
Setting **Copy to Output Directory** to `Copy always` ensures that the image file is available in the output folder when the application runs. Without this, the application may not find the image at runtime, leading to a missing resource error.

## Customizing the Button
In WPF, the `Content` property of a `Button` is an object, meaning you can add any control inside it. This allows for custom UI elements such as images, text, or even more complex layouts using containers like `Grid`, `StackPanel`, or `Border`.

### Example of a Custom Button with Multiple Elements
```xml
<Button Width="150" Height="50">
    <Button.Content>
        <StackPanel Orientation="Vertical" HorizontalAlignment="Center">
            <Image Source="/Image/icon.png" Width="30" Height="30" />
            <TextBlock Text="Click Me" FontSize="14" FontWeight="Bold" />
        </StackPanel>
    </Button.Content>
</Button>
```
In this example, the button includes both an image and a text block stacked vertically, demonstrating the flexibility of WPF's `Button.Content` property.

## Conclusion
By following these steps, you ensure that the image is correctly included in the project and displayed properly within the `Button` control in WPF. Additionally, you can leverage the `Content` property to create highly customizable buttons with rich UI elements.

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

