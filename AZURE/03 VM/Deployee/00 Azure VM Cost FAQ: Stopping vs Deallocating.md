# Azure VM Cost FAQ: Stopping vs Deallocating

When you stop a VM in Azure, understanding how billing works is crucial to manage costs effectively. This FAQ explains the differences and best practices.

## 1. Stopping a VM (From inside OS)

* When you stop a VM from **within the operating system** (clicking Start > Shutdown inside Windows, or using shutdown in Linux):

  * The VM **stops running**, but the **compute resources are still allocated**.
  * You **still pay for the compute** (CPU/Memory).
  * Storage (OS disk / Data disk) continues to be billed as usual.

✅ **Use case:** You want the VM off but keep the resources ready for quick restart.

## 2. Stopping / Deallocating a VM (From Azure Portal)

* When you stop a VM **from Azure Portal** (Stop button):

  * The VM is **stopped and deallocated**.
  * **Compute resources are released**, so you **stop paying for CPU/Memory**.
  * Storage costs (OS and data disks) **still apply**.
  * Public IP (if dynamic) may be released.

✅ **Use case:** You want to save costs when the VM is not needed for a period.

## 3. Billing Summary Table

| Action                           | Compute Cost | Storage Cost | IP Cost                    | Notes                               |
| -------------------------------- | ------------ | ------------ | -------------------------- | ----------------------------------- |
| Stop (Inside OS)                 | Yes          | Yes          | Yes                        | Quick stop, compute still allocated |
| Stop / Deallocate (Azure Portal) | No           | Yes          | Dynamic IP may be released | Cost-saving, resources freed        |

## 4. Best Practices to Reduce Costs

1. Always **use Stop / Deallocate** when VM is idle for hours/days.
2. Consider **Auto-Shutdown schedules** in Azure to automate cost savings.
3. Use **Spot VMs** for non-critical workloads to reduce compute cost up to 90%.
4. Keep only necessary **disks** and **release public IPs** if not needed.

## 5. Quick Tips

* Think of **Stop = Pause**, **Deallocate = Release Resources**.
* Billing for compute only stops when VM is **deallocated**, not just stopped inside OS.
* Disk costs are always billed until deleted.

   ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

