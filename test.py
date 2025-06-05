import aiohttp
import asyncio
import time
from tqdm.asyncio import tqdm

async def fetch_data(session, url):
    async with session.get(url) as response:
        return response

async def main():
    url = 'http://localhost:8000'
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_data(session, url) for _ in range(100000)]
        results = await tqdm.gather(*tasks)
        for result in tqdm(results):
            print(result)

start_time = time.time()
asyncio.run(main())
print(f"Total time taken: {time.time() - start_time} seconds")