# snapshot.directory
snapshot.directory is a collaborative open-source project by the Staking Defense League (SDL) that provides snapshots for different blockchain networks. Any SDL member can contribute and add a snapshot to the repository by following these steps:


## Contribute
1. Add the image in `/public/images/networks` in the format network.filetype.
2. Copy the `template.tsx` file located in `src/pages/networks/` and rename it to `<network_name>.tsx`.
3. Add new network information to main page `index.tsx`
4. Replace all instances of "TODO:" in the file with the relevant information.
5. Open a pull request stating:
- SDL member?
- Network
- Endpoint - this will then be added as a subdomain in the format chain.network.snapshot.directory.

# Supported Networks
- [Celo](https://celo.org)
## License
This project is licensed under the MIT License.